from flask import Flask, request, jsonify
import openai
import os
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
openai.api_key = OPENAI_API_KEY

app = Flask(__name__)

def calculate_bmi(weight, height):
    if weight and height:
        height_in_meters = height / 100 if height > 10 else height
        bmi = weight / (height_in_meters ** 2)
        return round(bmi, 2)
    return None

def generate_recommendations_via_openai(age, sex, ethnicity, healthcare_info, bmi):
    # Construct prompt for OpenAI API
    if sex == 'M':
        pronoun = 'his'
        gender = 'male'
    else:
        pronoun = 'her'
        gender = 'female'

    bmi_status = ""
    if bmi is not None:
        if bmi < 18.5:
            bmi_status = f"The user's BMI is {bmi}, which is considered underweight. Recommendations for gaining weight may be needed."
        elif 18.5 <= bmi < 25:
            bmi_status = f"The user's BMI is {bmi}, which is considered a healthy weight."
        elif 25 <= bmi < 30:
            bmi_status = f"The user's BMI is {bmi}, which is considered overweight. Recommendations for weight management may be useful."
        else:
            bmi_status = f"The user's BMI is {bmi}, which is considered obese. Health recommendations for weight loss might be required."

    prompt = f"""
        What are some health recommendations for a {age} year old {ethnicity} {gender}? 
        Consider hereditary health risks that may come with {ethnicity} and {gender}.
        The user has provided the following healthcare information: {healthcare_info}.
        Additionally, {bmi_status}.
        make the tone seem like a friendly check up reminder.
    """

    try:
        response = openai.Completion.create(
            model="text-davinci-003", 
            prompt=prompt,
            max_tokens=150
        )
        recommendations = response.choices[0].text.strip()
        return recommendations
    except Exception as e:
        return f"Error generating recommendations: {str(e)}"

@app.route('/recommendations', methods=['POST'])
def recommendations():
    data = request.json
    age = data.get('age')
    name = data.get('name')
    sex = data.get('sex')
    ethnicity = data.get('ethnicity')
    healthcare_info = data.get('healthcare_info', {})
    weight = data.get('weight')  
    height = data.get('height')  

    bmi = calculate_bmi(weight, height)

    recommendations = generate_recommendations_via_openai(age, sex, ethnicity, healthcare_info, bmi)

    response = {
        "name": name,
        "age": age,
        "ethnicity": ethnicity,
        "bmi": bmi,
        "recommendations": recommendations,
        "message": f"Hello {name}, based on your input, we recommend the following health check-ups:"
    }
    
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(debug=True)

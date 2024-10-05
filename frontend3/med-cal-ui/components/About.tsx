export default function About() {
    return (
        <section
            id="about"
            className="container py-24 sm:py-32"
        >
            <div className="bg-muted/50 border rounded-lg py-12">
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    {/*Insert Image*/}
                    <div className="bg-green-0 flex flex-col justify-between">
                        <div className="pb-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                                MedCal
                            </h2>
                            <p className="text-xl text-muted-foreground mt-4">
                                MedCal is a comprehensive health management app designed to simplify medication
                                tracking, allergy monitoring, and dietary safety. Using advanced AI, MedCal allows users
                                to scan medication labels and food products, automatically generating personalized
                                reminders, calendar entries, and allergen warnings. With features like ingredient
                                cross-referencing and restaurant menu analysis, MedCal helps users make informed health
                                decisions wherever they are.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
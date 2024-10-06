import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // Disabling body parser so formidable can handle form-data
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new IncomingForm();

    form.uploadDir = path.join(process.cwd(), 'public/uploads'); // Specify the upload directory
    form.keepExtensions = true; // Keeps file extension when renaming

    // Ensure the directory exists
    await fs.promises.mkdir(form.uploadDir, { recursive: true });

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Error parsing file:', err);
        return res.status(500).json({ message: 'Error parsing file' });
      }

      // Access the file property from the parsed form
      const file = files.file;  // 'file' is the name of the input field
      const oldPath = file.filepath;  // Correct way to access the file path

      // Construct a new file path, ensuring the extension is '.jpeg'
      const newFilePath = path.join(form.uploadDir, `${file.newFilename || file.originalFilename.split('.')[0]}.jpeg`);

      // Rename the file to its new location with '.jpeg' extension
      fs.rename(oldPath, newFilePath, (err) => {
        if (err) {
          console.error('Error saving file:', err);
          return res.status(500).json({ message: 'Error saving file' });
        }

        // File upload successful
        res.status(200).json({ message: 'File uploaded successfully!', fileName: `${file.newFilename || file.originalFilename.split('.')[0]}.jpeg` });
      });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}

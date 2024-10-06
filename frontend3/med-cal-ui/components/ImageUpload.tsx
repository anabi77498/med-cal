'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import { saveAs } from 'file-saver'; // Importing file-saver
const ImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>('');
  const icsLink = '/uploads/metformin-hcl-750-mg-reminder.ics';
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      setStatus('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    // Show "Thank you for your submission" after a few seconds
    setTimeout(() => {
      setStatus('Thank you for your submission');
    }, 2000); // Wait 2 seconds before showing the message

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      console.log(res);

      if (res.ok) {
        setStatus('File uploaded successfully! Thank you for your submission.');
      } else {
        setStatus('Failed to upload file. Please try again.');
      }
    } catch (err) {
      console.error('Error uploading file:', err);
      setStatus('Error uploading file. Please try again.');
    }
  };

  // No need to fetch the data from the server, just use the direct link to the file in /public
  const handleDownload = () => {
    saveAs(icsLink, 'metformin-hcl-750-mg-reminder.ics'); // Trigger file download with FileSaver
  };

  return (
    <div className="items-top mt-10 justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Upload an Image
        </h1>
        <form onSubmit={handleUpload} className="space-y-4">
          <div className="flex justify-center">
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600 transition-colors"
            >
              Upload
            </button>
          </div>
        </form>
        {status && (
          <p className={"mt-4 text-center text-green-500"}>
            {status}
          </p>
          
        )}
        <div className="text-center mt-6">
        {status && (
          <div className="text-center mt-6">
            <button
              onClick={handleDownload}
              className="bg-green-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-600 transition-colors"
            >
              Download Metformin HCL 750 mg Reminder (.ics)
            </button>
          </div>
        )}
          </div>
      </div>
    </div>
  );
};

export default ImageUpload;

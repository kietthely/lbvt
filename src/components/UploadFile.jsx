// FileUpload.jsx
import React, { useState } from "react";

const UploadFile = ({ onUpload, onNext }) => {
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    Array.from(selectedFiles).forEach((file) => {
      formData.append("files", file);
    });

    const response = await fetch("/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    onUpload(data);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button className="btn" onClick={handleUpload}>
        Upload
      </button>
      <button className="btn" onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default UploadFile;

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddFile() {
  const [fileName, setFileName] = useState("");
  const [fileType, setfileType] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [uploadedAt, setUploadedAt] = useState("");

  const navigate = useNavigate();
  const data = {
    fileName: fileName,
    fileType: fileType,
    fileUrl: fileUrl,
    uploadedAt: uploadedAt
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/files", data).then(navigate("/files"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-8">
      <Link
        to={`/files`}
        className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
      >
        Back To Files
      </Link>
      <h2 className="text-2xl font-bold mt-8">ADD FILE</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter file name"
        />
        <input
          value={fileType}
          onChange={(e) => setfileType(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter file type"
        />
        <input
          value={fileUrl}
          onChange={(e) => setFileUrl(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter file url"
        />
        <input
          value={uploadedAt}
          onChange={(e) => setUploadedAt(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Select file uploaded time"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          ADD FILE
        </button>
      </form>
    </div>
  );
}

export default AddFile;

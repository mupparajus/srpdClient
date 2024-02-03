import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditFile() {
  const [fileName, setFileName] = useState("");
  const [fileType, setfileType] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [uploadedAt, setUploadedAt] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/files/${id}`).then((res) => {
      setFileName(res.data.fileName);
      setfileType(res.data.fileType);
      setFileUrl(res.data.fileUrl);
      setUploadedAt(res.data.uploadedAt)
    });
  }, []);

  const navigate = useNavigate();
  const data = {
    fileName: fileName,
    fileType: fileType,
    fileUrl: fileUrl,
    uploadedAt: uploadedAt
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:8080/files/${id}`, data).then(navigate("/files"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-6">
      <Link
        to={`/files`}
        className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
      >
        Back To Files
      </Link>
      <h2 className="text-2xl font-bold mt-8">File Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={fileType}
          onChange={(e) => setfileType(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your total marks"
        />
        <input
          value={fileUrl}
          onChange={(e) => setFileUrl(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="phone"
          placeholder="Enter your phone no."
        />
        <input
          value={uploadedAt}
          onChange={(e) => setUploadedAt(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Select your Principal"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE FILE
        </button>
      </form>
    </div>
  );
}

export default EditFile;

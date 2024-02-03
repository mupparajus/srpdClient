import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function File() {
  const { id } = useParams();

  const [file, setFile] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/files/${id}`).then((res) => {
      setFile(res.data);
    });
  }, []);

  console.log(file);
  return (
    <>
      <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
        <Link
          to={`/files`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Files
        </Link>
        {file && (
          <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                File Name
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                File Type
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                File URL
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Uploaded At
              </h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {file.fileName}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {file.fileType}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2 truncate">
                {file.fileUrl}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {file.uploadedAt}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default File;

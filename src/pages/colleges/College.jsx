import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function College() {
  const { id } = useParams();

  const [college, setCollege] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/colleges/${id}`).then((res) => {
      setCollege(res.data);
    });
  }, []);

  console.log(college);
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center top-8 ">
        <Link
          to={`/colleges`}
          className="hover:bg-ct-blue-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border hover:text-gray-200 text-ct-blue-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Colleges
        </Link>
        {college && (
          <div className="w-[700px] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-ct-blue-600 mt-16 border-blue-800 border-2">
            <div className="w-9/12 flex flex-col space-y-4">
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                College Name
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                Email
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                Phone
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                Principal
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                IP Address
              </h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                {college.name}
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                {college.email}
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                {college.phone}
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                {college.principal}
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                {college.ipAddress}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default College;

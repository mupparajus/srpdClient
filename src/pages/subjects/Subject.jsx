import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Subject() {
  const { id } = useParams();

  const [subject, setSubject] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/subjects/${id}`).then((res) => {
      setSubject(res.data);
    });
  }, []);

  console.log(subject);
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center top-8">
        <Link
          to={`/subjects`}
          className="hover:bg-ct-blue-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border hover:text-gray-200 text-ct-blue-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Subjects
        </Link>
        {subject && (
          <div className="w-[700px] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-ct-blue-600 mt-16 border-blue-800 border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                Subject Name
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                Total Marks
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                Pass Marks
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                Lecturer
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                Course
              </h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                {subject.name}
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                {subject.totalMarks}
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                {subject.passMarks}
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                {subject.lecturer}
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                {subject.course}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Subject;

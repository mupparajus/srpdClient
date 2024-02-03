import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Course() {
  const { id } = useParams();

  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/courses/${id}`).then((res) => {
      setCourse(res.data);
    });
  }, []);

  console.log(course);
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center top-8">
        <Link
          to={`/courses`}
          className="hover:bg-ct-blue-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border hover:text-gray-200 text-ct-blue-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Courses
        </Link>
        {course && (
          <div className="w-[700px] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-ct-blue-600 mt-16 border-blue-800 border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                Course Name
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                Total Marks
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                Incharge
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                Course Duration
              </h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                {course.name}
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                {course.totalMarks}
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                {course.incharge}
              </h2>
              <h2 className="text-white font-bold text-lg border-white border-b-2">
                {course.years}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Course;

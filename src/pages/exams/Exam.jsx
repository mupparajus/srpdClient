import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Exam() {
  const { id } = useParams();

  const [exam, setExam] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/exams/${id}`).then((res) => {
      setExam(res.data);
    });
  }, []);

  console.log(exam);
  return (
    <>
      <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
        <Link
          to={`/exams`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Exams
        </Link>
        {exam && (
          <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Exam Name
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Subject
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Pass Marks
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Course
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Paper
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Exam Time
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Exam Duration
              </h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {exam.name}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {exam.subject}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {exam.passMarks}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {exam.course}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {exam.paper}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {exam.examTime}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {exam.duration}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Exam;

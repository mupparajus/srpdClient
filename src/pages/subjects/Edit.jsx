import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditSubject() {
  const [name, setName] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [passMarks, setPassMarks] = useState("");
  const [lecturer, setLecturer] = useState("");
  const [course, setCourse] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/subjects/${id}`).then((res) => {
      setName(res.data.name);
      setTotalMarks(res.data.totalMarks);
      setPassMarks(res.data.passMarks);
      setLecturer(res.data.lecturer)
      setCourse(res.data.course)
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
    totalMarks: totalMarks,
    passMarks: passMarks,
    lecturer: lecturer,
    course: course
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:8080/subjects/${id}`, data).then(navigate("/subjects"));
  }
  return (
    <div className="h-full w-full flex flex-col justify-center items-center mt-8">
      <Link
        to={`/subjects`}
        className="hover:bg-ct-blue-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border hover:text-gray-200 text-ct-blue-600 border-zinc-400 py-4 px-4 pl-4"
      >
        Back To Subjects
      </Link>
      <h2 className="text-xl font-bold">Subject Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={totalMarks}
          onChange={(e) => setTotalMarks(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Enter your total marks"
        />
        <input
          value={passMarks}
          onChange={(e) => setPassMarks(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="phone"
          placeholder="Enter your phone no."
        />
        <input
          value={lecturer}
          onChange={(e) => setLecturer(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Select your Principal"
        />
        <input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Select your Principal"
        />
        <button
          className="bg-ct-blue-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          Update Subject
        </button>
      </form>
    </div>
  );
}

export default EditSubject;

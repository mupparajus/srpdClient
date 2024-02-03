import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddCourse() {
  const [name, setName] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [incharge, setIncharge] = useState("");
  const [years, setYears] = useState("");

  const navigate = useNavigate();
  const data = {
    name: name,
    totalMarks: totalMarks,
    incharge: incharge,
    years: years
  };

  function submitForm(e) {
    e.preventDefault();
  //  axios.post("http://localhost:8080/courses", data).then(navigate("/courses"));
  axios.post("http://localhost:8080/addCourse", data).then(navigate("/courses"));
  }
  return (
    <div className="h-full w-full flex flex-col justify-center items-center mt-8">
      <Link
        to={`/colleges`}
        className="hover:bg-ct-blue-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border hover:text-gray-200 text-ct-blue-600 border-zinc-400 py-4 px-4 pl-4"
      >
        Back To Courses
      </Link>
      <h2 className="text-2xl font-bold">Add Course</h2>
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
          placeholder="Enter total Marks"
        />
        <input
          value={incharge}
          onChange={(e) => setIncharge(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Select your incharge"
        />
        <input
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Select course duration"
        />
        <button
          className="bg-ct-blue-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          Add Course
        </button>
      </form>
    </div>
  );
}

export default AddCourse;

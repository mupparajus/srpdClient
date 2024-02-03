import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddExam() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [passMarks, setPassMarks] = useState("");
  const [course, setCourse] = useState("");
  const [paper, setPaper] = useState("");
  const [examTime, setExamTime] = useState("");
  const [duration, setDuration] = useState("");

  const navigate = useNavigate();
  const data = {
    name: name,
    subject: subject,
    passMarks: passMarks,
    course: course,
    paper: paper,
    examTime: examTime,
    duration: duration
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/exams", data).then(navigate("/exams"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-8">
      <Link
        to={`/exams`}
        className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
      >
        Back To Exams
      </Link>
      <h2 className="text-2xl font-bold mt-8">ADD EXAM</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter total Marks"
        />
        <input
          value={passMarks}
          onChange={(e) => setPassMarks(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Select your incharge"
        />
        <input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Select course duration"
        />
        <input
          value={paper}
          onChange={(e) => setPaper(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Select exam paper"
        />
        <input
          value={examTime}
          onChange={(e) => setExamTime(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Select exam start date & time"
        />
        <input
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Select exam duration"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          ADD EXAM
        </button>
      </form>
    </div>
  );
}

export default AddExam;

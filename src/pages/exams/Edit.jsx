import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditExam() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [passMarks, setPassMarks] = useState("");
  const [course, setCourse] = useState("");
  const [paper, setPaper] = useState("");
  const [examTime, setExamTime] = useState("");
  const [duration, setDuration] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/exams/${id}`).then((res) => {
      setName(res.data.name);
      setSubject(res.data.subject);
      setPassMarks(res.data.passMarks);
      setCourse(res.data.course);
      setPaper(res.data.paper);
      setExamTime(res.data.examTime);
      setDuration(res.data.duration);
    });
  }, []);

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

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:8080/exams/${id}`, data).then(navigate("/exams"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Exam Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter exam name"
        />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your total marks"
        />
        <input
          value={passMarks}
          onChange={(e) => setPassMarks(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="phone"
          placeholder="Enter your phone no."
        />
        <input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Select your Principal"
        />
        <input
          value={paper}
          onChange={(e) => setPaper(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Select your Principal"
        />
        <input
          value={examTime}
          onChange={(e) => setExamTime(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Select your Principal"
        />
        <input
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Select your Principal"
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE EXAM
        </button>
      </form>
    </div>
  );
}

export default EditExam;

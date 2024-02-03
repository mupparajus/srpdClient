import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditCollege() {
  const [name, setName] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [incharge, setIncharge] = useState("");
  const [years, setYears] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/courses/${id}`).then((res) => {
      setName(res.data.name);
      setTotalMarks(res.data.totalMarks);
      setIncharge(res.data.incharge);
      setYears(res.data.years)
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
    totalMarks: totalMarks,
    incharge: incharge,
    years: years
  };

  function Update(e) {
    e.preventDefault();
    debugger;
    console.log("data is "+data);
    axios.put(`http://localhost:8080/courses/${id}`, data).then(navigate("/courses"));
  }
  return (
    <div className="h-full w-full flex flex-col justify-center items-center mt-8">
      <Link
        to={`/colleges`}
        className="hover:bg-ct-blue-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border hover:text-gray-200 text-ct-blue-600 border-zinc-400 py-4 px-4 pl-4"
      >
        Back To Courses
      </Link>
      <h2 className="text-xl font-bold">Course Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Enter course name"
        />
        <input
          value={totalMarks}
          onChange={(e) => setTotalMarks(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Enter your total marks"
        />
        <input
          value={incharge}
          onChange={(e) => setIncharge(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="phone"
          placeholder="Enter your In-charge."
        />
        <input
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Enter Course Duration"
        />
        <button
          className="bg-ct-blue-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          Update Course
        </button>
      </form>
    </div>
  );
}

export default EditCollege;

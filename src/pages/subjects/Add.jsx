import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Subject from './Subject';

function AddSubject() {
  const [name, setName] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [passMarks, setPassMarks] = useState("");
  const [lecturer, setLecturer] = useState("");
  const [course, setCourse] = useState("");

  const navigate = useNavigate();
  const data = {
    name: name,
    totalMarks: totalMarks,
    passMarks: passMarks,
    lecturer: lecturer,
    course: course
  };

  const[courseState,setCourseState]=useState([{
    id:0,
    name:"",
totalMarks:"",
inCharge:"",
years:0
}]);
const URL="http://localhost:8080/courses";
useEffect((url)=>{
  fetchCourseData(URL);
},[]);

const fetchCourseData=async(apiUrl)=>{
  try{
 // let res=  axios.get("http://localhost:8080/courses");
 let res= await axios.get(apiUrl);
  setCourseState(res.data);
  }catch(error){
      console.log("error is "+error);
  }

  }
  // function submitForm(e) {
  //   e.preventDefault();
    
  //   axios.post("http://localhost:8080/subjects", data).then(navigate("/subjects"));

  // }

  const submitForm=async (e)=>{
    e.preventDefault();
    debugger;
    try{
   let res=   await axios.post("http://localhost:8080/addSubject", data).then(navigate("/subjects"));

    }catch(error){
      console.log("while adding subject error is "+error);
    }

  }
  return (
    <div className="h-full w-full flex flex-col justify-center items-center mt-8">
      <Link
        to={`/subjects`}
        className="hover:bg-ct-blue-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border hover:text-gray-200 text-ct-blue-600 border-zinc-400 py-4 px-4 pl-4"
      >
        Back To Subjects
      </Link>
      <h2 className="text-2xl font-bold">Add Subject</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Enter subject name"
        />
        <input
          value={totalMarks}
          onChange={(e) => setTotalMarks(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Enter total Marks"
        />
        <input
          value={passMarks}
          onChange={(e) => setPassMarks(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Select pass marks"
        />
        <input
          value={lecturer}
          onChange={(e) => setLecturer(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Select subject lecturer"
        />
        {/* <input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Select the course"
        /> */}

<select className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4" onChange={(e) => setCourse(e.target.value)}> 
             <option defaultValue ="select">Select Course</option>
                {
                    courseState.map((eachCourse)=>{
                     const  {id,name}=  eachCourse;
                     return(    <option key={id} value={id}>{name}</option>
                    )})
                }
          </select>


        <button
          className="bg-ct-blue-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          Add Subject
        </button>
      </form>
    </div>
  );
}

export default AddSubject;

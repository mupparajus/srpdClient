import React from 'react';
import axios from 'axios'
import {useState,useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";




const AddPaper=()=>{

    const[setno,setSetNo]=useState(0);
//const[subject,setSubject]=useState("");
//const[fileName,setFileName]=useState(null);
const [selectedSubject, setSelectedSubject] = useState(0);
const [selectedFile, setSelectedFile] =useState(null); 
const [subjects, setSubjects] = useState([{
  
 
}]);


debugger;
const URL="http://localhost:8080/allSubjects";

useEffect(()=>{
  loadSubjects(URL);
},[]);


const loadSubjects= async (apiURL)=> {
  debugger;
  console.log("subjects ar called");
  try{
//   axios.get("http://localhost:8080/subjects").then((res) => {
 
//const res=await  axios.get(apiURL);
const res=await  axios.get("http://localhost:8080/subjects");

      console.log("subjects data is "+res.data);
     // setSubjects(res.data.reverse());
     setSubjects(res.data);
  }catch(error){
      console.log("error is"+error);
  }
  };


const submitForm=(e)=>{
  e.preventDefault;
  debugger;
 // console.log ("name "+e.target.value);
 // console.log ("file "+file);
  // const formData = new FormData();
  //   formData.append("selectedFile", fileName);
  //   formData.append("ename",selectedSubject);
  //   formData.append("setno",setno);
 //   debugger;
   // console.log("formData" +formData);
   //uploadData(formData);
   uploadData();

}
//const uploadData=async(formData)=>{
  const uploadData=async()=>{
  const formData = new FormData();
     formData.append("selectedFile", selectedFile);
     formData.append("ename",selectedSubject);
     formData.append("setno",setno);
  debugger;
  try {
    const res = await axios({
      method: "post",
      url: "http://localhost:8080/uploadFile/exam",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(navigate("/exampapers"));
  }catch(error){
    console.log("Error while uploading the file is "+error.data);
  }

}

// const handleFileSelect=(e)=>{
//  // console.log ("file is "+e.target.files[0]);
//  debugger;
//   setFileName(e.target.files[0])
// }

const handleFileSelect = (event) => {
  setSelectedFile(event.target.files[0])
}

    return (
        <div className="w-screen h-full flex flex-col justify-center items-center mt-8">
          {/* <Link
            to={`/files`}
            className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
          >
            Back To Files
          </Link> */}
          <h2 className="text-2xl font-bold mt-8">ADD PAPER</h2>
          <form className="w-[50%] h-full flex flex-col mt-2">
         <select className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4" onChange={(e) => setSelectedSubject(e.target.value)}> 
             <option defaultValue ="select">Select Subject/Exam</option>
                {
                    subjects.map((eachSubject)=>{
                     const  {id,name}=  eachSubject;
                     return(    <option key={id} value={id}>{name}</option>
                    )})
                }
          </select> 

            <input
              value={setno}
              onChange={(e) => setSetNo(e.target.value)}
              className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
              type="text"
              placeholder="Enter Set No"
            />
            
            <input 
              //value={fileName}
             // onChange={(e) => setFileName(e.target.files[0])}
             
              className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
              type="file"
           //   value={selectedFile}
              placeholder="Enter file name"
              onChange={handleFileSelect}
            />
            
            
            <button
              className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
              type="submit"
              onClick={submitForm}
            >
              UPLOAD PAPER
              
            </button>
          </form>
        </div>
      );

    
}
export default AddPaper;
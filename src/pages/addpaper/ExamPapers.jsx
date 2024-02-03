import React from 'react';
import axios from 'axios'
import {useState,useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { TiEye } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";



const ExamPapers=()=>{

    const[examPapers,setExamPapers]=useState([]);

debugger;
const URL="http://localhost:8080/examPapers";

useEffect(()=>{
  loadExamPapers(URL);
},[]);


const loadExamPapers= async (apiURL)=> {
  debugger;
  console.log("loadExamPapers ar called");
  try{

const res=await  axios.get("http://localhost:8080/examPapers");

      console.log("examPapers data is "+res.data);

     setExamPapers(res.data);
  }catch(error){
      console.log(" error in examPapers is"+error);
  }
  };



  return (
    <>
        <div className="w-[100vw] h-full flex flex-col px-10 py-8 mt-8">
            <div className="flex justify-around">
                <h2 className="text-xl font-bold">ExamPapers Data Table</h2>
                <button
                    className="bg-ct-blue-600 flex outline-none border text-white border-zinc-400 py-2 px-4"
                    type="submit"
                    onClick={() => navigate("/addpaper")}
                >

                    <FaPlus size={20} color="white" /> &nbsp; AddPaper
                </button>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
                    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center">
                                 <thead className="border-b bg-ct-blue-600">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white  py-2"
                                        >
                                            #
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white  py-2"
                                        >
                                            Action
                                        </th>

                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white  py-2"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white  py-2"
                                        >
                                            File Path
                                        </th>
                                        {/* <th
                                            scope="col"
                                            className="text-sm font-medium text-white  py-2"
                                        >
                                            File Type
                                        </th> */}
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white  py-2"
                                        >
                                            Subject
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-white  py-2"
                                        >
                                            SetNo
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="border-ct-dark-200 border-b-1">
                                    {examPapers.map((data, index) => (
                                        <tr
                                            key={index}
                                            className="bg-white border-b-2 border-gray"
                                        >
                                            <td className=" py-1  text-sm font-medium text-zinc-900 ">
                                                {index + 1}
                                            </td>
                                            <td className="text-sm flex justify-between  items-center text-gray-900 font-bold">
                                                <Link
                                                    to={`/edit-paper/${data.id}`}
                                                    className="bg-blue-600 text-white px-1 py-1"
                                                >
                                                    <TiEye size={20} title="View" />
                                                </Link>
                                                <Link
                                                    to={`/edit-paper/${data.id}`}
                                                    className="bg-orange-400 text-white px-1 py-1"
                                                >
                                                    <CiEdit size={20} title="Edit" />
                                                </Link>
                                                <Link
                                                    onClick={() => onDeleteHandler(data.id)}
                                                    to={"#"}
                                                    className="bg-red-600 text-white px-1 py-1"
                                                >
                                                    <MdDelete size={20} title="Delete" />
                                                </Link>
                                            </td>
                                            <td className="text-sm text-zinc-900 font-semibold py-1 ">
                                                {data.fileName}
                                            </td>
                                            <td className="text-sm text-zinc-900 font-semibold py-1 ">
                                                {data.filePath}
                                            </td>
                                            <td className="text-sm text-zinc-900 font-semibold py-1 ">
                                                {data.setno}
                                            </td>
                                            <td className="text-sm text-zinc-900 font-semibold py-1 ">
                                                {data.subject}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);



    
}
export default ExamPapers;
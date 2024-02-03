import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TiEye } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

function Subjects() {
    const [subjects, setSubjects] = useState([]);
    const [courses, setCourses] = useState([]);

    const navigate = useNavigate();


    const loadSubjects=async()=> {
        debugger;
        console.log("subjects ar called");
     //   axios.get("http://localhost:8080/subjects").then((res) => {
        try{
      const res=await  axios.get("http://localhost:8080/allSubjects");
            console.log("subjects data is "+res.data);
            setSubjects(res.data.reverse());
        }catch(error){
            console.log("error is"+error);
        }
        };

        const loadCourses=async() => {
            debugger;
            console.log("load courses are called")
            try{
           const res= await axios.get("http://localhost:8080/courses");
                console.log("courses data is "+res.data);
                setCourses(res.data.reverse());
            }catch(error){
                console.log("error is "+error);
            }
            
        }
    
    

    // function loadSubjects() {
    //     console.log("subjects ar called");
    //  //   axios.get("http://localhost:8080/subjects").then((res) => {
    //     axios.get("http://localhost:8080/allSubjects").then((res) => {
    //         console.log("subjects data is "+res.data);
    //         setSubjects(res.data.reverse());
    //     });
    // }
    // function loadCourses() {
    //     debugger;
    //     console.log("load courses are called")
    //     axios.get("http://localhost:8080/courses").then((res) => {
    //         console.log("courses data is "+res.data);
    //         setCourses(res.data.reverse());
    //     });
    // }


    useEffect(() => {
        loadSubjects();
        loadCourses();
    }, []);

    const onDeleteHandler = (id) => {
        if (window.confirm("Are you sure")) {
            deleteSubject(id);
        }
    }

    function deleteSubject(id) {
        axios.delete(`http://localhost:8080/subjects/${id}`).then(loadSubjects());
    }

    return (
        <>
            <div className="w-[100vw] h-full flex flex-col px-10 py-8 mt-8">
                <div className="flex justify-around">
                    <h2 className="text-xl font-bold">Subjects Data Table</h2>
                    <button
                        className="bg-ct-blue-600 flex outline-none border text-white border-zinc-400 py-2 px-4"
                        type="submit"
                        onClick={() => navigate("/add-subject")}
                    >

                        <FaPlus size={20} color="white" /> &nbsp; Subject
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
                                                Total Marks
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-white  py-2"
                                            >
                                                Pass Marks
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-white  py-2"
                                            >
                                                Lecturer
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-white  py-2"
                                            >
                                                Course Id
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-white  py-2"
                                            >
                                                Course Name
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-ct-dark-200 border-b-1">
                                        {subjects.map((data, index) => (
                                            <tr
                                                key={index}
                                                className="bg-white border-b-2 border-gray"
                                            >
                                                <td className=" py-1  text-sm font-medium text-zinc-900 ">
                                                    {index + 1}
                                                </td>
                                                <td className="text-sm flex justify-between  items-center text-gray-900 font-bold">
                                                    <Link
                                                        to={`/subjects/${data.id}`}
                                                        className="bg-blue-600 text-white px-1 py-1"
                                                    >
                                                        <TiEye size={24} title="View" />
                                                    </Link>
                                                    <Link
                                                        to={`/edit-subject/${data.id}`}
                                                        className="bg-orange-400 text-white px-1 py-1"
                                                    >
                                                        <CiEdit size={24} title="Edit" />
                                                    </Link>
                                                    <Link
                                                        onClick={() => onDeleteHandler(data.id)}
                                                        to={"#"}
                                                        className="bg-red-600 text-white px-1 py-1"
                                                    >
                                                        <MdDelete size={24} title="Delete" />
                                                    </Link>
                                                </td>
                                                <td className="text-sm text-zinc-900 font-semibold py-1 ">
                                                    {data.name}
                                                </td>
                                                <td className="text-sm text-zinc-900 font-semibold py-1 ">
                                                    {data.totalMarks}
                                                </td>
                                                <td className="text-sm text-zinc-900 font-semibold py-1 ">
                                                    {data.passMarks}
                                                </td>
                                                <td className="text-sm text-zinc-900 font-semibold py-1 ">
                                                    {data.lecturer}
                                                </td>
                                                <td className="text-sm text-zinc-900 font-semibold py-1 ">
                                                    {data.course}
                                                </td>
                                                <td className="text-sm text-zinc-900 font-semibold py-1 ">
                                                    {courses.find(x => x['id'] === data.course)['name']}
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

export default Subjects;

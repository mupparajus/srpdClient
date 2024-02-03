import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TiEye } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

function Colleges() {
    const [colleges, setColleges] = useState([]);
    const navigate = useNavigate();
    
    const loadColleges=async()=> {
      //  debugger;
        console.log("loadColleges is called");
     //   axios.get("http://localhost:8080/colleges").then((res) => {
     let res=   await axios.get("http://localhost:8080/allColleges"); 
      //     axios.get("allColleges").then((res) => {
      debugger;
            console.log("response data??"+res.data[0]);
            console.log("response config??"+res.config);
            console.log("response header??"+res.headers);
            console.log("response status??"+res.status);
            console.log("response statusText"+res.statusText);

          let  arrayCollege =res.data.reverse()
         let retData= res.data;
    //    const processedArr=  retData.filter((college)=>{
    //      return   college.cid!==19
    //      })
    //      setColleges(processedArr);

        //    setColleges(res.data.reverse());
         setColleges(arrayCollege);
        //  setColleges(colleges=>[...colleges,res.data.reverse()])
        
    }

    function loadColleges_old() {
        //  debugger;
          console.log("loadColleges is called");
       //   axios.get("http://localhost:8080/colleges").then((res) => {
          axios.get("http://localhost:8080/allColleges").then((res) => {
        //     axios.get("allColleges").then((res) => {
        debugger;
              console.log("response data??"+res.data[0]);
              console.log("response config??"+res.config);
              console.log("response header??"+res.headers);
              console.log("response status??"+res.status);
              console.log("response statusText"+res.statusText);
  
            let  arrayCollege =res.data.reverse()
           let retData= res.data;
         const processedArr=  retData.filter((college)=>{
           return   college.cid!=='13'
           })
           setColleges(processedArr);
  
          //    setColleges(res.data.reverse());
          //  setColleges(arrayCollege);
          //  setColleges(colleges=>[...colleges,res.data.reverse()])
          });
      }
const loadListAfterDelete=async(id)=>{
    debugger;
    console.log("loadListAfterDelete is called with id "+id);
 //   axios.get("http://localhost:8080/allColleges").then((res) => {
    let res=await axios.get("http://localhost:8080/allColleges");
        console.log("res"+res+" data "+res.data)
        let retData= res.data;
         const processedArr=  retData.filter((college)=>{
            console.log("college.cid"+college.cid+id);
           return   college.cid!==id
           })
           setColleges(processedArr);
      //  setColleges(
        //    res.filter((eachCollege)=>eachCollege.id!=id)
       // )


}
    useEffect(() => {
        loadColleges();
    }, []);

    const onDeleteHandler = (id) => {
        if (window.confirm("Are you sure"+id)) {
            deleteNote(id);
        }
    }

    function deleteNote(id) {
        console.log("delete with id"+id);
      //  axios.delete(`http://localhost:8080/colleges/${id}`).then(loadColleges());
      //axios.delete(`colleges/${id}`).then(loadColleges());
      axios.delete(`http://localhost:8080/colleges/${id}`).then(loadListAfterDelete(id));
      
    }

    return (
        <>
            <div className="w-[100vw] h-full flex flex-col px-10 py-8 mt-8">
                <div className="flex justify-around">
                    <h2 className="text-xl font-bold">Colleges Data Table</h2>
                    <button
                        className="bg-ct-blue-600 flex outline-none border text-white border-zinc-400 py-2 px-4"
                        type="submit"
                        onClick={() => navigate("/add-college")}
                    >

                        <FaPlus size={20} color="white"/> &nbsp; College
                    </button>
                </div>
                <div className="flex flex-col">
                    <div className="overflow-x-auto mt-8 items-center mx-2">
                        <div className="py-2 inline-block min-w-full px-2">
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
                                                className="text-sm font-lg text-white  py-2"
                                            >
                                                Action
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-lg text-white  py-2"
                                            >
                                                College Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-lg text-white  py-2"
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-lg text-white  py-2"
                                            >
                                                Phone
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-lg text-white  py-2"
                                            >
                                                Principal
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-lg text-white  py-2"
                                            >
                                                IP Address
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-ct-dark-200 border-b-1">
                                        {colleges.map((data, index) => (
                                          
                                            <tr
                                              //  key={index}
                                                                
                                              key={data.id}
                                                className="bg-white border-b-2 border-gray"
                                            >
                                                <td className=" py-1  text-sm font-medium text-zinc-900 ">
                                                    {index + 1}
                                                </td>
                                                <td className="text-sm flex justify-between  items-center text-gray-900 font-bold ">
                                                    <Link
                                                     //   to={`/colleges/${data.id}`}
                                                        to={`/colleges/${data.cid}`}
                                                     
                                                        className="bg-blue-600 ctext-white px-1 py-1"
                                                    >
                                                        <TiEye size={20} title="View" />
                                                    </Link>
                                                    <Link
                                                      //  to={`/edit-college/${data.id}`}
                                                      to={`/edit-college/${data.cid}`}
                                                        className="bg-ct-yellow-600 text-white px-1 py-1"
                                                    >
                                                        <CiEdit size={20} title="Edit" color="black"/>
                                                    </Link>
                                                    <Link
                                                        onClick={() => onDeleteHandler(data.cid)}
                                                        to={"#"}
                                                        className="bg-red-600 text-white px-1 py-1"
                                                    >
                                                        <MdDelete size={20} title="Delete" />
                                                    </Link>
                                                </td>
                                                <td className="text-sm text-zinc-900 font-semibold py-1 ">
                                                    {data.name}
                                                </td>
                                                <td className="text-sm text-gray-900 font-semibold py-1 ">
                                                    {data.email}
                                                </td>
                                                <td className="text-sm text-gray-900 font-semibold py-1 ">
                                                    {data.phone}
                                                </td>
                                                <td className="text-sm text-gray-900 font-semibold py-1 ">
                                                    {data.principal}
                                                </td>
                                                <td className="text-sm text-gray-900 font-semibold py-1 ">
                                                    {data.ipAddress}
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

export default Colleges;

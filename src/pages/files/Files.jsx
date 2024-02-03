import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TiEye } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

function Files() {
    const [files, setFiles] = useState([]);
    const navigate = useNavigate();

    function loadFiles() {
        axios.get("http://localhost:3001/files").then((res) => {
            setFiles(res.data.reverse());
        });
    }

    useEffect(() => {
        loadFiles();
    }, []);

    const onDeleteHandler = (id) => {
        if (window.confirm("Are you sure")) {
            deleteFile(id);
        }
    }

    function deleteFile(id) {
        axios.delete(`http://localhost:3001/files/${id}`).then(loadFiles());
    }

    return (
        <>
            <div className="w-[100vw] h-full flex flex-col px-10 py-8 mt-8">
                <div className="flex justify-around">
                    <h2 className="text-xl font-bold">Files Data Table</h2>
                    <button
                        className="bg-ct-blue-600 flex outline-none border text-white border-zinc-400 py-2 px-4"
                        type="submit"
                        onClick={() => navigate("/add-file")}
                    >
                        <FaPlus size={20} color="white" /> &nbsp; File
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
                                               File  Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-white  py-2"
                                            >
                                                File Type
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-white  py-2"
                                            >
                                                File URL
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-white  py-2"
                                            >
                                                Uploaded At
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-black border-b-2">
                                        {files.map((data, index) => (
                                            <tr
                                                key={index}
                                                className="bg-white border-b-2 border-gray"
                                            >
                                                <td className=" py-1  text-sm font-medium text-zinc-900 ">
                                                    {index + 1}
                                                </td>
                                                <td className="text-sm flex justify-between  items-center text-gray-900 font-bold">
                                                    <Link
                                                        to={`/files/${data.id}`}
                                                        className="bg-blue-600 text-white px-1 py-1"
                                                    >
                                                        <TiEye size={24} title="View" />
                                                    </Link>
                                                    <Link
                                                        to={`/edit-file/${data.id}`}
                                                        className="bg-orange-400 text-white px-1 py-1"
                                                    >
                                                        <CiEdit size={24} title="Edit" />
                                                    </Link>
                                                    <Link
                                                        onClick={() => deleteFile(data.id)}
                                                        to={"#"}
                                                        className="bg-red-600 text-white px-1 py-1"
                                                    >
                                                        <MdDelete size={24} title="Delete" />
                                                    </Link>
                                                </td>
                                                <td className="text-sm text-zinc-900 font-semibold py-1 ">
                                                    {data.fileName}
                                                </td>
                                                <td className="text-sm text-zinc-900 font-semibold py-1 ">
                                                    {data.fileType}
                                                </td>
                                                <td className="text-sm text-zinc-900 font-semibold py-1 ">
                                                    {data.fileUrl.length > 25
                                                        ? data.fileUrl.substring(0, 25) + "..."
                                                        : data.fileUrl}
                                                </td>
                                                <td className="text-sm text-zinc-900 font-semibold py-1 ">
                                                    {data.uploadedAt}
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

export default Files;

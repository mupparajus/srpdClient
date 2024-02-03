import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditCollege() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [principal, setPrincipal] = useState("");
  const [ipAddress, setIpAddress] = useState("");
 

  //const { id } = useParams();
  const { cid } = useParams();
  console.log("cid "+cid);
  useEffect(() => {
   // axios.get(`http://localhost:8080/colleges/${id}`).then((res) => {
    axios.get(`http://localhost:8080/colleges/${cid}`).then((res) => {
   //   axios.get(`http://localhost:8080/colleges/`+23).then((res) => {
      debugger;
      console.log(res.data.cid);
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setPrincipal(res.data.principal);
      setIpAddress(res.data.ipAddress);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
    email: email,
    phone: phone,
    principal: principal,
    ipAddress: ipAddress
  };

  function Update(e) {
    e.preventDefault();
    debugger;
    console.log('${cid}');
  //  axios.put(`http://localhost:8080/colleges/${id}`, data).then(navigate("/colleges"));
  axios.put(`http://localhost:8080/colleges/${cid}`, data).then(navigate("/colleges"));
  }
  return (
    <div className="h-full w-full flex flex-col justify-center items-center mt-8">
      <Link
        to={`/colleges`}
        className="hover:bg-ct-blue-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border hover:text-gray-200 text-ct-blue-600 border-zinc-400 py-4 px-4 pl-4"
      >
        Back To Colleges
      </Link>
      <h2 className="text-xl font-bold">College Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="email"
          placeholder="Enter your email"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="phone"
          placeholder="Enter your phone no."
        />
        <input
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Select your Principal"
        />
        <input
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="phone"
          placeholder="Your ipAddress"
        />
        <button
          className="bg-ct-blue-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          Update College
        </button>
      </form>
    </div>
  );
}

export default EditCollege;

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../store";

function AddCollege() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [principal, setPrincipal] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [university, setUniversity] = useState("");
  ipAddress
  const navigate = useNavigate();
  const data = {
    name: name,
    email: email,
    phone: phone,
    principal: principal,
    ipAddress: ipAddress,
    uid:university
  };
  debugger;
const state =useStore.getState();
console.log("AddCollege getState is "+state);
console.log("AddCollege getState token  is "+state.authToken);
  const addCollege = async (data) => {
    try{
      console.log("add College is called");
    // const response = await authApi.post<ILoginResponse>("authenticate", user);
     // const response = await authApi.post<ILoginResponse>("users", user);
    
    const response = await axios.post("http://localhost:8080/addCollege",data,{headers :{'Authorization':'Bearer '+token}}).then(navigate("/colleges"));
    console.log("response is? "+response);
    console.log("response data is? "+response.data)
   
   
    }catch(Error){
     console.log("Error is "+Error);
    }
    // console.log("loginUserFn: ", response.data);
   //  return {
   //    status: "true",
    //   access_token:
     //    response.data,
    // };
   };

  function submitForm(e) {  
    e.preventDefault();
    debugger;
    console.log('college data is '+data.ipAddress);
    // console.log("token is"+localStorage.getItem("mupparajs@gmail.com"));
    // let jwtToken=localStorage.getItem("mupparajs@gmail.com");
    // console.log("jwtToken is "+jwtToken);
    
  const token=state.authToken;
  console.log("In Add College submitForm jwt token is "+token);
  console.log("In Add College submitForm data is"+data);
    //axios.post("http://localhost:8080/colleges", data).then(navigate("/colleges"));
    try{
  axios.post("http://localhost:8080/addCollege", data,{headers :{'Authorization':'Bearer '+token}}).then(navigate("/colleges"));
  //axios.post("http://localhost:8080/addCollege", data).then(navigate("/colleges"));
  //addCollege(data);
  }catch(error){
    console.log("Add College submitForm error is "+error)
  }
}
  return (
    <div className="h-full w-full flex flex-col justify-center items-center mt-8">
      <Link
        to={`/colleges`}
        className="hover:bg-ct-blue-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border hover:text-gray-200 text-ct-blue-600 border-zinc-400 py-4 px-4 pl-4"
      >
        Back To Colleges
      </Link>
      <h2 className="text-2xl font-bold">Add College</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="text"
          placeholder="Enter your college name"
        />
        
        {/* <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="peer bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4 placeholder:text-transparent"
          type="email"
          // placeholder="Enter your email"
        />
        <label htmlFor="email" className="absolute left-0 ml-1 -translate-y-3 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm">Enter your email</label> */}

        <div className="relative group outline-none font-normal border border-zinc-400 pl-6 mt-6">
          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" 
            id="email" 
            required 
            className="w-full h-10 text-sm peer  outline-none"
          />
          <label 
            htmlFor="email" 
            className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
              Enter your email
          </label>
        </div>
        
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
          type="text"
          placeholder="Your ipAddress"
        />
        <input
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-6 mt-4"
          type="number"
          placeholder="college under which university"
        />
        <button
          className="bg-ct-blue-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          Add College
        </button>
      </form>
    </div>
  );
}

export default AddCollege;

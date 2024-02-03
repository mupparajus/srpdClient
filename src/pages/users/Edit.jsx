import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  //const [id, setId]=useState(0);

  const { id } = useParams();


  useEffect(() => {
    axios.get(`http://localhost:8080/users/${id}`).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
    //  setPhone(res.data.phone);
     setPhone("9666600012");
    });
  }, []);
  // useEffect(() => {
  //   loadUsers},[]);


//   const loadUsers= async ()=>{
//     try{
     
//         const res =await axios.get(`http://localhost:8080/users/${id}`);
//         setName(res.data.name);
//         setEmail(res.data.email);
//       //  setPhone(res.data.phone);
//        setPhone("9666600012");
//   }catch(error){
    
//     console.log("error is "+error);
//   }
// }

 /* useEffect( async () => {
    try{
   // axios.get(`http://localhost:8080/users/${id}`).then((res) => {
     const res =await axios.get(`http://localhost:8080/users/${id}`);
      debugger;
      console.log(res.data);
     setName(res.data.name);
      setEmail(res.data.email);
    //  setPhone(res.data.phone);
     setPhone("9666600012");
    }catch(error){
      debugger;
      console.log("error is "+error);
    }
    
  }, []);
*/
  const navigate = useNavigate();

  const data = {
    name: name,
    email: email,
    phone: phone,
  //  id:id,
  };

  function Update(e) {
    e.preventDefault();
    debugger;
    axios.put(`http://localhost:8080/users/${id}`, data).then(navigate("/users"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">User Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="email"
          placeholder="Enter your email"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="phone"
          placeholder="Enter your phone no."
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE USER
        </button>
      </form>
    </div>
  );
}

export default EditUser;
 
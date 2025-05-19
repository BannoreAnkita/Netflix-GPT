import React,{useState} from "react";
import Header from "./Header";
import { BG_URL } from "../constants/constant";

const Login = () => {
  const [toggleForm,setToggleForm] = useState(true)
  const handleClick = () => {
      setToggleForm(!toggleForm);
  }
  return (
    <div className="">
      <Header />
      <div className="relative">
        <img src={BG_URL} className="absolute -z-10" />
       
        <form className="bg-black p-12 rounded w-1/4 absolute mx-auto my-36 right-0 left-0 text-white p-4 opacity-90">
         <h1 className="text-white font-bold mb-3 text-2xl">{toggleForm ?' Sign In' : 'Sign Up'}</h1>
          {!toggleForm && <div className="mb-2 p-2 bg-gray-700 rounded"><input type="text" placeholder="Enter Name" className="outline-0" /></div>}
          <div className="mb-2 p-2 bg-gray-700 rounded"><input type="email" placeholder="Enter an Email" className="outline-0" /></div>
          <div className="mb-2 p-2  bg-gray-700 rounded"><input type="password" placeholder="Password" className="outline-0" /></div>
          {toggleForm  ? <button className="mb-2 p-2 bg-red-500 rounded text-white w-full cursor-pointer" type="submit" >
            Sign In
          </button>
           :
          <button className="mb-2 p-2 bg-red-500 rounded text-white w-full cursor-pointer" type="submit" >
            Sign Up
          </button>}
          {
            toggleForm ? <button className=" text-white w-full cursor-pointer" type="button" onClick={handleClick}>
            New User, Sign up</button>: <button className=" text-white w-full cursor-pointer" type="button" onClick={handleClick}>
            Already user,Sign In</button>
          }
           
        </form>
      </div>
    </div>
  );
};

export default Login;

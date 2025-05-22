import React from "react";
import { LOGO_URL } from "../constants/constant";
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store=>store.user)
  const navigate = useNavigate();
  console.log(auth)
   const handleSignOut = () => {
   
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <div className="flex justify-between bg-transparent absolute w-full">
      <div className=" w-55 bg-gradient-to-b">
        <img alt="logo" className="w-100" src={LOGO_URL} />
      </div>
     {
      user &&  <div>
        <img className="w-12 h-12" src={user.photoURL} />
        <button type="button" className="cursor-pointer" onClick={handleSignOut}>Sign Out</button>
      </div>
     }
    </div>
  );
};

export default Header;

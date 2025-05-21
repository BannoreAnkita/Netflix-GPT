import React, { useState, useRef } from "react";
import Header from "./Header";
import { BG_URL } from "../constants/constant";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "../utils/validation.js";
import { auth } from "../utils/firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [toggleSignInForm, setToggleSignInForm] = useState(true);
  const [errorMsgEmail, setErrorMsgEmail] = useState("");
  const [error, setError] = useState("");
  const [errorMsgPassword, setErrorMsgPassword] = useState("");
  const [errorMsgName, setErrorMsgName] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClick = () => {
    setToggleSignInForm(!toggleSignInForm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMsgEmail(validateEmail(email.current.value.trim()));
    setErrorMsgPassword(validatePassword(password.current.value.trim()));
    if (!toggleSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
           console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
            setError( errorMessage);
        });
    }
  };

  const handleChange = () => {
    setErrorMsgEmail("");
    setErrorMsgPassword("");
    setErrorMsgName("");
  };

  return (
    <div className="">
      <Header />
      <div className="relative">
        <img src={BG_URL} className="absolute -z-10" />

        <form className="bg-black p-12 rounded w-1/4 absolute mx-auto my-36 right-0 left-0 text-white p-4 opacity-90">
          <h1 className="text-white font-bold mb-3 text-2xl">
            {toggleSignInForm ? " Sign In" : "Sign Up"}
          </h1>
          {!toggleSignInForm && (
            <div className="mb-6">
              <div className="p-2 bg-gray-700 rounded">
                <input
                  type="text"
                  ref={name}
                  placeholder="Enter Name"
                  className="outline-0 w-full"
                  onChange={handleChange}
                />
              </div>
              <p className="font-semibold text-red-600">{errorMsgName}</p>
            </div>
          )}
          <div className="mb-6">
            <div className="p-2 bg-gray-700 rounded">
              <input
                type="email"
                ref={email}
                placeholder="Enter an Email"
                className="outline-0 w-full"
                onChange={handleChange}
              />{" "}
            </div>
            <p className="font-semibold text-red-500">{errorMsgEmail}</p>
          </div>
          <div className="mb-6">
            <div className="p-2  bg-gray-700 rounded">
              <input
                type="password"
                ref={password}
                placeholder="Password"
                className="outline-0 w-full"
                onChange={handleChange}
              />
            </div>
            <p className="font-semibold text-red-500">{errorMsgPassword}</p>
          </div>
          {toggleSignInForm ? (
            <button
              className="mb-6 p-2 bg-red-500 rounded text-white w-full cursor-pointer"
              type="submit"
              onClick={handleFormSubmit}
            >
              Sign In
            </button>
          ) : (
            <button
              className="mb-6 p-2 bg-red-500 rounded text-white w-full cursor-pointer"
              type="submit"
              onClick={handleFormSubmit}
            >
              Sign Up
            </button>
          )}
          {toggleSignInForm ? (
            <button
              className=" text-white w-full cursor-pointer"
              type="button"
              onClick={handleClick}
            >
              New User, Sign up
            </button>
          ) : (
            <button
              className=" text-white w-full cursor-pointer"
              type="button"
              onClick={handleClick}
            >
              Already user,Sign In
            </button>
          )}
          <p className="text-red-500">{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;

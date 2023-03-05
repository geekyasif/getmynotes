import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleSignIn } from "../../features/authSlice/authSlice";

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSigninAndValidate = () => {
    if (email === "" || password === "") {
      alert("All fields are required!");
    } else {
      dispatch(handleSignIn(email, password));
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col justify-center items-center h-full w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Sign in To GetMyNotes
          </h1>
          <div className="">
            <div className="p-2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <button
              className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 mt-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"
              onClick={handleSigninAndValidate}
            >
              Sign in
            </button>

            <div className="flex items-center justify-center mt-3">
              <p>Don't have an account ?</p>
              <Link to="/signup" className="text-indigo-500 ml-2">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signin;

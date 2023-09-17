import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  handleSignIn,
  setAuthSignInError,
} from "../../features/authSlice/authSlice";

function Signin() {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const navigate = useNavigate();
  const { authSignInError, authLoading, authToken } = useSelector(
    (state) => state.auth
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSigninAndValidate = () => {
    if (email === "" || password === "") {
      dispatch(setAuthSignInError("All fields are required!"));
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const isValid = emailRegex.test(email);

      if (isValid) {
        dispatch(handleSignIn(email, password));
        setEmail("");
        setPassword("");
      } else {
        dispatch(setAuthSignInError("Invalid email address!"));
      }
    }
  };

  useEffect(() => {
    if (authToken !== null) {
      // eslint-disable-next-line
      navigate("/");
    }
    // eslint-disable-next-line
  }, [authToken]);

  return (
    <section className="text-gray-600 body-font relative pb-8">
      <div className="container mx-auto px-5 md:h-screen lg:h-screen">
        <div className="flex flex-col justify-center items-center md:h-full lg:h-full pb-4">
          <div className="flex title-font font-medium items-center text-gray-900 mt-4 lg:mb-8">
            <img src="/getmynotesicon.svg" width={30} color="blue" alt="logo" />
            <span className="ml-3 text-xl">GetMyNotes</span>
          </div>

          <div className="lg:w-2/5 xl:w-2/6 bg-gray-100 rounded-lg p-4 lg:p-4 flex flex-col md:mx-auto w-full mt-4 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-3 text-center">
              Sign In
            </h2>
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
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                  className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {authSignInError && (
                <p className="text-red-600 text-center text-sm mt-3">
                  {authSignInError}
                </p>
              )}
            </div>

            <button
              disabled={authLoading}
              className={
                authLoading
                  ? "flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 mt-2 focus:outline-none hover:bg-indigo-600 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  : "flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 mt-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"
              }
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

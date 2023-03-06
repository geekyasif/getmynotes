import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleSignOut } from "../features/authSlice/authSlice";

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authToken, user } = useSelector((state) => state.auth);

  const signOut = () => {
    dispatch(handleSignOut());
    navigate("/signin");
  };

  return (
    <header className="text-gray-600 body-font border-b sticky top-0 bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src="/getmynotesicon.svg" width={30} color="blue" />
          <span className="ml-3 text-xl">GetMyNotes</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" to="/">
            Home
          </Link>
          {authToken != null ? (
            <Link className="mr-5 hover:text-gray-900" to="/notes">
              Notes
            </Link>
          ) : (
            <></>
          )}
          <Link className="mr-5 hover:text-gray-900" to="/contact">
            Contact us
          </Link>
          {/* <Link className="mr-5 hover:text-gray-900" to="/dashboard">Dashboard</Link> */}
        </nav>

        {authToken != null ? (
          <button
            className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 mr-3"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        ) : (
          <>
            <Link
              className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 mr-3"
              to="/signin"
            >
              Sign in
            </Link>
            <Link
              className="inline-flex items-center text-gray-700 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-3"
              to="/signup"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Navigation;

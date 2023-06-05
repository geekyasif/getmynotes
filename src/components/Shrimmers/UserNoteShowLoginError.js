import { height } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function UserNoteShowLoginError() {
  return (
    <div className="flex w-full bg-gray-100 rounded h-[600px] border">
      <div
        className="w-1/2"
        style={{
          backgroundImage: `url(/sorry.jpg)`,
          // backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex justify-center items-center flex-col w-1/2">
        <p className="">Please Sign in To Download The Notes</p>

        <Link
          className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-2 text-sm md:px-3 lg:px-3 md:py-1 lg:py-1 focus:outline-none hover:bg-indigo-600 rounded md:text-base lg:text-base mr-3"
          to="/signin"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default UserNoteShowLoginError;

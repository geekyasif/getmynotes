import React from "react";
import { Link } from "react-router-dom";

function UserNoteShowLoginError() {
  return (
    <div className="mb-4 w-full md:h-[600px] lg:h-[600px] h-[500px] rounded border bg-gray-100 flex-col md:flex md:mb-0 lg:flex-row lg:mb-0">
      <div
        className="h-[400px] bg-contain bg-no-repeat md:w-full md:h-full md:bg-contain md:bg-no-repeat lg:w-full lg:h-full lg:bg-contain lg:bg-no-repeat"
        style={{ backgroundImage: "url(/sorry.jpg)" }}
      ></div>
      <div className="w-full flex items-center justify-center">
        <div className="p-4 text-center">
          <p className="mb-2 text-sm md:text-xl lg:text-xl">
            Please Sign in To Download The Notes
          </p>
          <Link
            className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-2 text-sm md:px-3 lg:px-3 md:py-1 lg:py-1 focus:outline-none hover:bg-indigo-600 rounded md:text-base lg:text-base mr-3"
            to="/signin"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserNoteShowLoginError;

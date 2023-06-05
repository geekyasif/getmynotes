import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { handleSignOut } from "../features/authSlice/authSlice";

function Navigation() {
  // eslint-disable-next-line
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const { authToken, user } = useSelector((state) => state.auth);

  console.log(user);

  const signOut = () => {
    dispatch(handleSignOut());
  };

  useEffect(() => {
    if (authToken === null) {
      // eslint-disable-next-line
      navigate("/signin");
    }

    // eslint-disable-next-line
  }, [authToken]);

  return (
    <header className="text-gray-600 body-font border-b bg-white">
      <div className="container mx-auto p-5 flex flex-wrap flex-col  md:flex-row items-center ">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src="/getmynotesicon.svg" width={30} color="blue" alt="logo" />
          <span className="ml-3 text-xl">GetMyNotes</span>
        </Link>
        <nav className="md:ml-auto flex flex-row flex-wrap items-center text-base justify-center">
          <Link
            className={
              location.pathname === "/"
                ? "mr-5 hover:text-indigo-600 text-sm md:text-base text-indigo-500"
                : "mr-5 hover:text-gray-900 text-sm md:text-base"
            }
            // className="mr-5 hover:text-gray-900 text-sm md:text-base"
            to="/"
          >
            Home
          </Link>

          <Link
            className={
              location.pathname === "/notes"
                ? "mr-5 hover:text-indigo-600 text-sm md:text-base text-indigo-500"
                : "mr-5 hover:text-gray-900 text-sm md:text-base"
            }
            to="/notes"
          >
            Notes
          </Link>

          <Link
            className={
              location.pathname === "/contact"
                ? "mr-5 hover:text-indigo-600 text-sm md:text-base text-indigo-500"
                : "mr-5 hover:text-gray-900 text-sm md:text-base"
            }
            to="/contact"
          >
            Contact us
          </Link>
          {authToken && user.photoUrl === "admin" ? (
            <Link className="mr-5 hover:text-gray-900" to="/dashboard">
              Dashboard
            </Link>
          ) : (
            ""
          )}

          <div className="flex flex-row flex-wrap justify-center">
            {authToken != null ? (
              <button
                className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-2 text-sm md:px-3 lg:px-3 md:py-1 lg:py-1 focus:outline-none hover:bg-indigo-600 rounded md:text-base lg:text-base mr-3"
                onClick={() => signOut()}
              >
                {/* {user.name?.split(" ")[0]}
                 */}
                Sign out
              </button>
            ) : (
              <>
                <Link
                  className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-2 text-sm md:px-3 lg:px-3 md:py-1 lg:py-1 focus:outline-none hover:bg-indigo-600 rounded md:text-base lg:text-base mr-3"
                  to="/signin"
                >
                  Sign in
                </Link>
                <Link
                  className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-2 text-sm md:px-3 lg:px-3 md:py-1 lg:py-1 focus:outline-none hover:bg-indigo-600 rounded md:text-base lg:text-base mr-3"
                  to="/signup"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function AuthRoute() {
  const navigate = useNavigate();
  const { authToken } = useSelector((state) => state.auth);

  useEffect(() => {
    // eslint-disable-next-line
    if (authToken == null) {
      // eslint-disable-next-line
      return navigate("/signin");
    }

    // eslint-disable-next-line
  }, []);

  return <Outlet />;
}

export default AuthRoute;

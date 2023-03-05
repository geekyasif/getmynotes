import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function AuthRoute() {
  const navigate = useNavigate();
  const { authToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (authToken == null) {
      return navigate("/signin");
    }
  }, []);

  return <Outlet />;
}

export default AuthRoute;

import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

function AdminRoute() {
  const navigate = useNavigate()
  const {authToken, user} = useSelector(state => state.auth)

  if(authToken && user.photoUrl === "admin"){
    return <Outlet/>
  }

  return navigate("/")
}

export default AdminRoute
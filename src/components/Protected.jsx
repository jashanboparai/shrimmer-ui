import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


function Protected() {
    const isAdmin = false; // This should be replaced with actual authentication logic
  return (
    isAdmin ? <Outlet /> : <Navigate to="/unauthorized" />
  )
}

export default Protected
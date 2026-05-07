import React from 'react'
import { Navigate } from 'react-router-dom'


export default function ProtectRouter({ children }) {

  let token = localStorage.getItem("token")

  if (!token) {
    return <Navigate to="/Login" replace />
  }

  return children
}

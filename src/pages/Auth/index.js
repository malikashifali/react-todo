import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "./Login"
import Register from './Register'
import ForgotPassword from './ForgotPassword'
import NoPage from "../Dashboard/NoPage"
// import UpdatePassword from './UpdatePassword'

export default function Index() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='auth/register' element={<Register />} />
        <Route path='auth/forgot-password' element={<ForgotPassword />} />
        {/* <Route path='auth/update-password' element={<UpdatePassword />} /> */}
        <Route path='*' element={<NoPage />} />
      </Routes>
    </>
  )
}

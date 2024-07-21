import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from "./Auth"
import Dashboard from "./Dashboard"

export default function Index() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<Auth />} />
        <Route path='dashboard/*' element={<Dashboard />} />
      </Routes>
    </>
  )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Todos from "./Todos"
import Users from "./Users"
import NoPage from "./NoPage"
import AddTodo from './AddTodo'
import UpdatePassword from './UpdatePassword'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Index() {
  return (
   <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/todos' element={<Todos />} />
      <Route path='/users' element={<Users />} />
      <Route path='/add-todo' element={<AddTodo />} />
      <Route path='/update-password' element={<UpdatePassword />} />
      <Route path='*' element={<NoPage />} />
    </Routes>
    <Footer />
   </>
  )
}

import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Admin from '../admin/Admin';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import MyProject from '../Pages/Projects/MyProject';
function AllRoutes() {
  return (
    <Routes>
        <Route path={'/'} element={<Home/>} />
        {/* <Route path={'/projects'} element={<MyProject/>} /> */}
        <Route path={'/projects/:Pid'} element={<MyProject/>} />
        <Route path={'/contact'} element={<Contact/>} />
        <Route path={`/${process.env.REACT_APP_ADMIN_LINK}`} element={<Admin/>} />
        <Route path={`/${process.env.REACT_APP_ADMIN_LINK}/:chatId`} element={<Admin/>} />
    </Routes>
  )
}

export default AllRoutes
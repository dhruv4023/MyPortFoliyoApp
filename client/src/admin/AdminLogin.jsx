import React from 'react'
import { useState } from 'react';

function AdminLogin({setAdminPAge}) {
    const [password, setPassword] = useState("");
    const [NAme, setNAme] = useState("");
    const handlePasswordLogin = () => {
      if (
        password === process.env.REACT_APP_ADMIN_PASSWORD &&
        process.env.REACT_APP_ADMIN_NAME === NAme
      ) {
        setAdminPAge(true);
        // console.log(NAme, password);
      } else {
        setAdminPAge(false);
      }
    };
  return (
    <div className="_admin_Password">
    <input
      type="password"
      className="input_admin_Password"
      onChange={(e) => setNAme(e.target.value)}
      placeholder="Enter Password"
    />
    <input
      type="password"
      className="input_admin_Password"
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter Password"
    />
    <input onClick={handlePasswordLogin} type="button" value="Sign in" className="Login_admin_btn" />
  </div>
  )
}

export default AdminLogin
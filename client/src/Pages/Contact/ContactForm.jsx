import React from 'react'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { contact } from "../../actions/contact";

function ContactForm() {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !email || !message) {
        alert("pls fill the entire form!");
      } else {
        alert("submitted successfully!");
        dispatch(contact({ name, email, message }));
      }
    };
  return (
    <div className="box">
    <div>
      <h1 className="heading">Fill THE FORM</h1>
      <form onSubmit={handleSubmit} className="formArea">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="ibox"
          id="name"
          placeholder="Enter your Name"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="ibox"
          id="email"
          placeholder="Enter your Email"
        />
        <textarea
          name="mess"
          onChange={(e) => setMessage(e.target.value)}
          id="mess"
          className="ibox"
          cols="30"
          rows="10"
          placeholder="Enter your Message"
        ></textarea>
        <button type="submit" className="subBtn">
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default ContactForm
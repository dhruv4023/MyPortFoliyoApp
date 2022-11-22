import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { contact } from "../../actions/contact";
import InputBox from "../../components/InputBox/InputBox";

function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log(name, email, message);
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
          <InputBox
            tip={"Enter Your Name"}
            labelTxt={"Enter Name"}
            setVal={setName}
          />
          <InputBox
            labelTxt={"Enter Email"}
            setVal={setEmail}
            type="email"
            mxlen={50}
            tip={"Enter Your Email"}
          />
          <InputBox
            isTextarea={true}
            setVal={setMessage}
            labelTxt={"Your Message"}
          />
          <button type="submit" className="subBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactImage">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
      </div>

      <div className="contactContent">
        <div className="findUs">
          <h1>How to Find Us</h1>
          <p>
            If you have any questions, just fill in the <br></br>contact form
            and we will answer you shortly.{" "}
          </p>
        </div>

        <div className="detailForm">
          <h1>Get In Touch</h1>
          <form action="">
            <div className="formElement">
              <input type="text" name="" id="" placeholder="  Name" />
            </div>
            <div className="formElement">
              <input type="text" name="" id="" placeholder="  Email" />
            </div>
            <div className="formElement">
              <textarea
                name=""
                id=""
                cols="36"
                rows="3"
                placeholder="  Message For Us"
              ></textarea>
            </div>
            <button className="btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

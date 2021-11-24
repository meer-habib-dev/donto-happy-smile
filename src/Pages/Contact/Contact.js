import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import img from "./image/img-01.png";

const Contact = () => {
  return (
    // <!--Contact Us section start-->
    <section className="contact-section">
      <div className="contact-container bottom-padding height-screen flex justify-center align-middle pt-28 p-6">
        <div className="contact1">
          <div className="container-contact1">
            <div className="contact1-pic" data-tilt>
              <img src={img} alt="IMG" />
            </div>
            <form className="contact1-form">
              <span className="contact1-form-title">Get in touch</span>
              <div className="wrap-input1">
                <input
                  className="input1"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="wrap-input1">
                <input
                  className="input1"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="wrap-input1 ">
                <input
                  className="input1"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="wrap-input1">
                <textarea
                  className="input1"
                  name="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="container-contact1-form-btn">
                <button className="contact1-form-btn">
                  <Link to="/">
                    <span>Send Email</span>
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

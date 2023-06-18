import React from "react";
import SectionHeading from "../components/SectionHeader";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div id="contact" className="container">
      <SectionHeading sectionName="Contact me" />
      <article className="form-text">
        <p className="brief-intro">
          Since you've come this far, I'd love to hear from you. How about you
          drop me an email and say hi?
        </p>
      </article>
      <div className="glassy-container">
        <form action="https://formspree.io/f/mjvznweg" method="post">
          <div className="form-group">
            <label htmlFor="fullname" className="visually-hidden">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="visually-hidden">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="kigozijosephsuubi1@gmail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="visually-hidden">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="8"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

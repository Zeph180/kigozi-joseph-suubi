import React from "react";
import GitHubIcon from "../../assets/social-icons/GitHub";
import LinkedInIcon from "../../assets/social-icons/LinkedIn";
import MediumIcon from "../../assets/social-icons/Medium";
import TwitterIcon from "../../assets/social-icons/Twitter";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div id="home-container">
      <p className="home-greeting">Hi, my name is</p>
      <h1 className="my-name" style={{ color: "#0F85F2" }}>
        Kigozi Joseph Suubi
        <br /> aka <i>Zeph</i>
      </h1>

      <article className="intro-cont">
        <p className="brief-intro" style={{ color: "#0F85F2" }}>
          I am passionate about creating beautiful and user-friendly web
          applications that enhance the user experience. With a strong
          background in web development and design, I love to work on projects
          that challenge me to explore new technologies and methodologies. Let's
          connect and create amazing web experiences together.
        </p>
      </article>

      <section className="social-links">
        <a href="https://github.com/zeph180" className="social-link">
          <GitHubIcon />
        </a>
        <a
          href="https://linkedin.com/in/kigozi-joseph-suubi"
          className="social-link"
        >
          <LinkedInIcon />
        </a>
        <a href="https://medium.com/@zeph180" className="social-link">
          <MediumIcon />
        </a>
        <a href="https://twitter.com/richards_zeph" className="social-link">
          <TwitterIcon />
        </a>
      </section>
    </div>
  );
};

export default HomePage;

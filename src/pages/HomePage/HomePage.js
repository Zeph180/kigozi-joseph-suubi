import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div id="home-container">
      <p className="home-greeting">Hi, my name is</p>
      <h1 className="my-name" style={{ color: "#0F85F2" }}>
        Kigozi Joseph Suubi
        <br /> aka<i>Zeph</i>
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
      <button
        style={{
          width: "100px",
          marginTop: "15px",
          height: "35px",
          fontSize: "17px",
          fontWeight: "bold",
          borderWidth: "0px",
          backgroundColor: "#9CC8E1",
        }}
      >
        Git hub
      </button>
    </div>
  );
};

export default HomePage;

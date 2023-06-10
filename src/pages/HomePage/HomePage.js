import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div id="home-container" className="container">
      <p className="home-greeting">Hi, my name is</p>
      <h1 className="my-name" style={{ color: "#0F85F2" }}>
        Kigozi Joseph Suubi!
        <br />
        <span>I am a frontend developer.</span>
        <span>Who loves <span>playing chess</span>.</span>
      </h1>
    </div>
  );
};

export default HomePage;

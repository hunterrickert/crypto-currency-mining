import React from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Navbar></Navbar>
      <Jumbotron backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Crypto Mining!</h1>
        <h2>Learn everything you need to know about crypto mining.</h2>
      </Jumbotron>
      
        
    </div>
  );
}

export default About;

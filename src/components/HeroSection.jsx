import React from "react";
import "../styles/hero.css";
import Button from "./Button";

/*position top left width heitgh a varier props */
function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <h1>We offer the best business ideas</h1>
        <p>Your success starts here!</p>
        <Button text="Learn More" />
      </div>
    </section>
  );
}

export default HeroSection;

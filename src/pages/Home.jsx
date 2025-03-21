import React from "react";
import "../styles/home.css";
import Card from "../components/Card";
import Button from "../components/Button";

function Home() {
  return (
    // container qui est
    <div className="home-container">
      {/* div image */}
      <div className="img-home">
        <img src="/confort.jpg" alt="" srcset="" />
      </div>
      {/* div card */}
      <div className="card-home">
        <Card
          width="500px"
          title={`Let's do our best`}
          text={`And we won't let them get us down we'll keep getting up
        when  hit the ground  wont never give no never give up `}
          children={<Button text={"Learn More"} color={"#141414"} />}
        />
      </div>
    </div>
  );
}

export default Home;

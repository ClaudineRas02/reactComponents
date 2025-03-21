import React from "react";
import "../styles/doubleHeader.css";
import Features from "./Features";
import Button from "./Button";

function DoubleHeader({ title, paragraph, btntxt }) {
  return (
    <div className="container">
      <div className="div-text">
        {title}
        {paragraph}
        <Button text={btntxt} />
      </div>
      <div className="div-img"></div>
    </div>
  );
}

export default DoubleHeader;

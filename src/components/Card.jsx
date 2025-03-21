import React from "react";
import "../styles/card.css";

function Card({
  title,
  text,
  width = "500px",
  height = "auto",
  children = "",
}) {
  return (
    <div className="card" style={{ width, height }}>
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
      {children ? <div className="card-footer">{children}</div> : null}
    </div>
  );
}

export default Card;

import React from "react";

export default function Banner({ text, bg }) {
  return (
    <div
      className="tf-page-title"
      style={{ backgroundImage: `url(${bg})` }} // Correct usage
    >
      <div className="container-full">
        <div className="heading text-center">{text}</div>
      </div>
    </div>
  );
}

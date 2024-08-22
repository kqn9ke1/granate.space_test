import React from "react";

const HeadButton = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "670px",
        right: "80px",
        filter: "invert(90%)",
      }}
    >
      <button
        style={{
          background:
            "radial-gradient(circle, rgba(185,41,91,1) 0%, rgba(89,16,44,1) 53%, rgba(42,43,47,1) 100%)",
          padding: "20px 30px",
        }}
      >
        Связаться с нами
      </button>
    </div>
  );
};

export default HeadButton;

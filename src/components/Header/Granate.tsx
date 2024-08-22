import React from "react";
import img1 from "../../assets/гранатинки_без обводки 1.png";
import img2 from "../../assets/гранатинки_без обводки 2.png";
const Granate = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        background: "white",
        width: "100%",
        height: "683px",
        borderRadius: "24px",
      }}
    >
      <img
        src={img1}
        alt=""
        style={{
          position: "absolute",
          right: "20px",
          zIndex: "0",
          filter: "invert(90%)",
        }}
      />
      <img
        src={img2}
        alt=""
        style={{ position: "absolute", zIndex: "0", filter: "invert(90%)" }}
      />
    </div>
  );
};

export default Granate;

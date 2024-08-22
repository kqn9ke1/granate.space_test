import React from "react";
import Logo from "./Logo";
import NavButton from "./NavButton";
import NavText from "./NavText";
const Navbar = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "20px 10px" }}
    >
      <nav style={{ display: "flex", gap: "235px" }}>
        <Logo />
        <NavText />
        <NavButton />
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import arrow from "../../assets/icons8-стрелка-вниз-30.png";
const NavText = () => {
  return (
    <>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <li>Об экосистеме</li>
        <li>
          Цифровое пространство{" "}
          <span>
            <img src={arrow} width={"10px"} alt="arrow" />
          </span>
        </li>
        <li>кейсы</li>
        <li>О нас</li>
        <li>Для бизнеса</li>
      </ul>
    </>
  );
};

export default NavText;

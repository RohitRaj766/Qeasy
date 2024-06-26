import React from "react";
import "./Header.scss";
import logoImage from "../../assets/images/logo.svg";
const Header = () => {
  return (
    <>
      <nav>
        <div className="main">
          <div className="leftside">
            <div className="logo">
              <img src={logoImage} alt="logo" />
            </div>
            <p className="text">
              <span className="Q">Q</span>uizee
            </p>
          </div>

          <div className="rightside">
            <button className="login">LOGIN</button>
            <button className="signup">SIGN UP</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

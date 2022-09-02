import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <div className = {`nav ${show && "nav__black"}`}>
        <img
            className = "nav__logo"
            src = "https://th.bing.com/th/id/R.715e69176d3cec74504b3ae00f2676c6?rik=vGDJl%2bfFL64qmw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fNetflix-Logo-HD.png&ehk=aWIF5J5TR6tD4IrfNFhXE0dNVq%2f6n%2f6OViRGEsRS%2bNg%3d&risl=&pid=ImgRaw&r=0"
            alt = "Netflix Logo"
        />

        <img
            className="nav__avatar"
            src = "https://cdn.icon-icons.com/icons2/2619/PNG/256/among_us_netflix_icon_156927.png"
            alt = "Netflix Logo"
        />
    </div>
  );
}

  export default Nav;
import React from "react";
import "./Footer.scss";

function Footer() {
  const currentYear = new Date(Date.now()).toString().substring(11, 15);

  return (
    <footer className="FooterContainer">
      <div className="footerContent">Copyright {currentYear}</div>
    </footer>
  );
}

export default Footer;

import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer">
        {/* add socials logos */}

        <div class="row">
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>

        <div class="row">
          Copyright © 2024 - All rights reserved || Designed By: DoraNac
        </div>
      </div>
    </footer>
  );
};

export default Footer;

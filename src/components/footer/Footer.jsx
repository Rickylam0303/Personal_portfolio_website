import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ricky</h1>

        <ul className="footer__list">
          <li>
            <a href="#About" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#Project" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          {" "}
          <a
            href="https://www.instagram.com/ricky_l_am/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/wai-kit-lam-801116306/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-linkedin"></i>
          </a>
          <a
            href="https://github.com/Rickylam0303"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Ricky Lam. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;

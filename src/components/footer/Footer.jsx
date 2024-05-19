import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <p>Follow us on social media</p>
        <ul>
          <li>
            <i className="bi bi-instagram"></i>
          </li>
          <li>
            <i className="bi bi-telegram"></i>
          </li>
          <li>
            <i className="bi bi-youtube"></i>
          </li>
          <li>
            <i className="bi bi-facebook"></i>
          </li>
          <li>
            <i className="bi bi-twitter"></i>
          </li>
        </ul>
      </div>
      <div className="lower-footer">
        <div className="links section">
          <h3>Usefull Links</h3>
          <ul>
            <Link to="./">Home</Link>
            <Link to="./authors">Authors</Link>
            <Link to="./blog">Blog</Link>
            <Link to="./about">About Us</Link>
            <Link to="./contact">Contact Us</Link>
          </ul>
        </div>
        <div className="contact section">
          <h3>Contact Information</h3>
          <ul>
            <li>
              <p>Algeria - Tipaza - Hadjout</p>
            </li>
            <li>
              <p>123-456-789</p>
            </li>
            <li>
              <p>example@email.com</p>
            </li>
          </ul>
        </div>
        <div className="about section">
          <h3>About</h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
          delectus eaque. Eveniet exercitationem ad ullam vitae voluptatem nulla
          expedita quibusdam sapiente repellat sunt, vero nemo, rem tempore
          beatae placeat corrupti.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

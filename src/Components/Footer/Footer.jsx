import React from "react";
import "../Footer/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <div className="right">
            Collec<span style={{ color: "red" }}>TIVE</span>
          </div>
          <p>
          Collective Transportation strive to deliver reliable services with a focus on quality and customer satisfaction.
          </p>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">LINKS</h3>
          <ul>
            <li>Home</li>
            <li>Service</li>
            <li>About us</li>
            <li>Testimonial</li>
            <li>Clients</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">ADDRESS</h4>
          <p>
            <FaPhoneAlt /> 0507559273

          </p>
          <p>
            <BsTelephone /> 0543737909
          </p>
          <p>
            <FaEnvelope /> sale@collective.com
          </p>
          <p>
            <FaMapMarkerAlt />Abudhabi, Al Markaziyah, clocktower building behind wtc souq
          </p>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">INSTAGRAM FEED</h3>
          <p>Coming Soon</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="left">COPYRIGHT 2025 | Collective</div>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaGoogle />
          <FaPinterest />
          <FaInstagram />
        </div>
        <div className="right">
          MADE BY Collec<span style={{ color: "red" }}>TIVE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

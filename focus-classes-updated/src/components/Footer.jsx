import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>Contact & Business Details</h3>

          <p>Focus Coaching Classes</p>

          <p>
            <FaEnvelope className="footer-icon" />
            info@focuscoachingclasses.in
          </p>

          <p>
            <FaPhoneAlt className="footer-icon" />
            09920506327
          </p>

          <p>
            <FaClock className="footer-icon" />
            08:30 am - 06:30 pm
          </p>

          <p>
            <FaMapMarkerAlt className="footer-icon" />
            Shraddha Sankul, Gangapur Rd,
            Shreerang Nagar, Nashik,
            Maharashtra 422013, India
          </p>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Courses</h3>
          <ul>
            <li>10th SSC Classes</li>
            <li>10th CBSE Classes</li>
            <li>NEET Classes in Nashik</li>
            <li>JEE Classes in Nashik</li>
            <li>CET Classes in Nashik</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Other Details</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Support</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Focus Coaching Classes. All Rights Reserved.</p>

        <p>
          Powered by <span>Technokraft</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
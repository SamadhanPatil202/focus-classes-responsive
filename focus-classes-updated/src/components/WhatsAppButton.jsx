import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919920506327"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <FaWhatsapp />
      <span className="wa-text">Chat on WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;

import React from "react";
import {
  FaDiscord,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
export default function SocialLinks() {
  return (
    <div className="social-links-wrapper">
      <span
        style={{ backgroundColor: "#6f85d5" }}
        className="d-flex a-center j-center"
      >
        <a
          href="https://t.me/"
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegramPlane size={22} />
        </a>
      </span>
      
    </div>
  );
}

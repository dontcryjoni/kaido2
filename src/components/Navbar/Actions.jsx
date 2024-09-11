import React from "react";
import { FaRandom, FaComments, FaBroadcastTower } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Actions({ isInSidebar }) {
  return (
    <div
      className="nav-actions f-poppins text-light trans-c-03"
      style={
        isInSidebar
          ? {
              display: "flex",
              background: "var(--dark)",
              marginInline: "0px",
              borderRadius: "0px",
            }
          : {}
      }
    >
      
      <span>
        <Link to="/details/random" href="https://twitter.com/AniWatchGo">
          <FaRandom size={20} />
          <p>Random</p>
        </Link>
      </span>
      
    </div>
  );
}

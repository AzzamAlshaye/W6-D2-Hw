import React, { useState } from "react";

import iconMain from "../assets/nav-images/main-logo.webp";
// Zone icons
import icon1 from "../assets/nav-images/burger-icons/nav-(1).webp";
import icon2 from "../assets/nav-images/burger-icons/nav-(2).webp";
import icon3 from "../assets/nav-images/burger-icons/nav-(3).webp";
import icon4 from "../assets/nav-images/burger-icons/nav-(4).webp";
import icon5 from "../assets/nav-images/burger-icons/nav-(5).webp";
import icon6 from "../assets/nav-images/burger-icons/nav-(6).webp";
import icon7 from "../assets/nav-images/burger-icons/nav-(7).webp";
import icon8 from "../assets/nav-images/burger-icons/nav-(8).webp";
import icon9 from "../assets/nav-images/burger-icons/nav-(9).webp";
import icon10 from "../assets/nav-images/burger-icons/nav-(10).webp";
// Social icons
import iconF from "../assets/nav-images/burger-icons/faceboock-logo.png";
import iconX from "../assets/nav-images/burger-icons/x-logo.png";
import iconI from "../assets/nav-images/burger-icons/insta-logo.png";

import "../App.css";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const zones = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
  ];
  const socials = [iconF, iconX, iconI];

  return (
    <header className="header">
      <nav className="navbar-container">
        {/* Sidebar menu */}
        <div className={`sidebar ${open ? "open" : ""}`}>
          <ul className="sidebar-menu" role="menu">
            {/* View Booklet button */}
            <li className="view-booklet">
              <button className="booklet-btn">View Booklet</button>
            </li>
            <li className="separator">
              <hr className="separator-line" />
            </li>
            {/* Zone icons grid */}
            <li>
              <ul className="icon-grid">
                {zones.map((src, i) => (
                  <li key={i} className="icon-cell">
                    <img src={src} alt={`Zone ${i + 1}`} className="icon-img" />
                  </li>
                ))}
              </ul>
            </li>
            <li className="separator">
              <hr className="separator-line" />
            </li>
            {/* Social icons row */}
            <li>
              <ul className="social-grid">
                {socials.map((src, i) => (
                  <li key={i} className="social-cell">
                    <img
                      src={src}
                      alt={`Social ${i + 1}`}
                      className="icon-img"
                    />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        {/* Burger toggle */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div />
          <div />
          <div />
        </button>

        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src={iconMain} alt="Logo" />
          </a>
        </div>

        {/* Language + booklet actions */}
        <div className="nav-actions">
          <button className="lang-btn">العربية</button>
          <button className="booklet-btn">View Booklet</button>
        </div>
      </nav>
    </header>
  );
}

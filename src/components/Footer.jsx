import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-top">
      <div className="footer-brand-social">
        <figure className="footer-logo">
          <img
            src="https://images.ctfassets.net/vy53kjqs34an/3b6vBa9H4jGNZQvpCDV9sm/ca9a29433c61e153eaa123f7fb59ec15/website_RiyadhSeason_w.png"
            alt="Riyadh Season Logo"
            width="85"
            height="110"
          />
        </figure>
        <ul className="footer-social">
          <li>
            <a
              href="https://www.facebook.com/webookfun/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
            >
              <img
                src="https://images.ctfassets.net/vy53kjqs34an/12dxmhGOwDp0O60rGkGaoU/2316038e3becb17702597cf2782052f1/Button-1.png"
                alt="Facebook Icon"
                width="55"
                height="55"
              />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/RiyadhSeason"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="X"
            >
              <img
                src="https://images.ctfassets.net/vy53kjqs34an/7FPODYVihpzuYzN2hoDlD2/1e889247bc73807bd4844d210f91e2db/Button.png"
                alt="X Icon"
                width="55"
                height="55"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/riyadhseason"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
            >
              <img
                src="https://images.ctfassets.net/vy53kjqs34an/6vlq9w8miTqnUyvaPVTGlt/c7098a6a02a829656ad0150412caa439/Button-2.png"
                alt="Instagram Icon"
                width="55"
                height="55"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-legal"></div>
    </div>
    <div className="footer-bottom">
      <nav className="footer-nav">
        <button className="footer-language" aria-label="Switch to Arabic">
          العربية
        </button>
        <ul className="footer-links">
          <li>
            <a href="/en/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/en/terms">Terms & Conditions</a>
          </li>
        </ul>
      </nav>
      <div className="footer-copy">
        <span>Copyright © 2024 RIYADH SEASON. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;

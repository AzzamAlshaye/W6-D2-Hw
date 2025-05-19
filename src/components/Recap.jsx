import React from "react";
import "./Recap.css";

const Recap = () => (
  <section id="recap-2023-section" className="recap-section">
    <svg
      width="812"
      height="705"
      viewBox="0 0 812 705"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="recap-bg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M811.5 705H596.5H401.5L309.092 648.995L-36 449.991C81.9193 271.136 235.461 117.778 414.53 0L811.5 705Z"
        fill="#987BFF"
      />
    </svg>
    <div className="recap-container">
      <div className="recap-grid">
        <div className="recap-info">
          <img
            src="https://images.ctfassets.net/vy53kjqs34an/1gbFl4Q7C1bI7YyssruI2V/637b666df8a9d2330d6e6ea81b7fe307/Button-3.png?fm=webp&w=70&h=70"
            alt="Watch Riyadh Season 2023 Recap"
            className="recap-icon"
          />
          <h3 className="recap-title">Watch Riyadh Season 2023 Recap</h3>
          <div className="recap-actions">
            <a
              href="https://www.youtube.com/c/riyadhseason"
              rel="noopener noreferrer"
              target="_blank"
              className="recap-button"
            >
              Watch more moments
            </a>
          </div>
        </div>
        <video
          poster="https://images.ctfassets.net/vy53kjqs34an/5PcL5NRQvrljV31YLYi2UE/738df0fc1368a14eaec969afc8eb555a/Screenshot_2024-09-02_192441.png"
          playsInline
          disablePictureInPicture
          controls
          crossOrigin="anonymous"
          className="recap-video"
        >
          <source
            src="https://videos.ctfassets.net/vy53kjqs34an/6Bq1C6PdoQXs4MSQWZS2tp/9eab192d3c853c6d0a156255a57143e6/Revision_3.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="recap-footer">
        <a
          href="https://www.youtube.com/c/riyadhseason"
          rel="noopener noreferrer"
          target="_blank"
          className="recap-button"
        >
          Watch more moments
        </a>
      </div>
    </div>
  </section>
);

export default Recap;

import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <video
        className="hero-video"
        playsInline
        disablePictureInPicture
        autoPlay
        loop
        muted
        crossOrigin="anonymous"
      >
        <source
          src="https://videos.ctfassets.net/vy53kjqs34an/6Bq1C6PdoQXs4MSQWZS2tp/9eab192d3c853c6d0a156255a57143e6/Revision_3.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Welcome to Riyadh Season 2024</h1>
        </div>
        <div className="hero-buttons">
          <button className="hero-button explore">Explore</button>
          <a
            className="hero-button book"
            href="https://webook.com/en/season/riyadh-season-2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://images.ctfassets.net/vy53kjqs34an/70gUZ6vDCLCNWIW9wIFxrS/e92d2395ea2faf07034dd41074ea7aa9/Ticket.svg?fm=webp&fit=pad&w=20&h=20"
              alt="Ticket White Icon"
            />
            Book Tickets
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

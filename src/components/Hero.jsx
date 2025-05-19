import React from "react";
import "../App.css";
export default function Hero() {
  return (
    <section className="hero-section">
      <video className="hero-video" autoPlay loop muted>
        <source
          src="https://videos.ctfassets.net/.../Revision_3.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-content container">
        <h1>Welcome to Riyadh Season 2024</h1>
        <button className="btn btn-secondary">Explore</button>
        <a className="btn btn-primary" href="">
          Book Tickets
        </a>
      </div>
    </section>
  );
}

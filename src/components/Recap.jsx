import React from "react";
import "../App.css";
export default function Recap() {
  return (
    <section className="recap-section container">
      <h2>Watch Riyadh Season 2023 Recap</h2>
      <video controls className="recap-video">
        <source
          src="https://videos.ctfassets.net/.../Revision_3.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}

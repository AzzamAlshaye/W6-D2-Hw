import React from "react";
import "../App.css";
const zones = [
  /* array of zone objects */
];
export default function Zones() {
  return (
    <section className="zones-section container">
      <h2>14 Zones to Explore</h2>
      <div className="zones-grid">
        {zones.map((z, i) => (
          <div key={i} className="zone-card">
            ...
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import "../App.css";
const sponsorGroups = [
  /* groups */
];
export default function Sponsors() {
  return sponsorGroups.map((g, i) => (
    <div key={i} className="sponsor-group">
      ...
    </div>
  ));
}

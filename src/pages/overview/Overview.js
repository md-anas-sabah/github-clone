import React from "react";
import Pinned from "../../components/pinned/Pinned";
import "./Overview.css";

function Overview() {
  return (
    <div className="overview">
      <p>Pinned</p>
      <div className="overview__pinned">
        <Pinned title="dice-game" tool="css" />
        <Pinned title="guess-my-number" tool="javascript" />
        <Pinned title=" minimalist-banking" tool="javascript" />
        <Pinned title=" camera-api " tool="html" />
        <Pinned title="MAPBOX-API" tool="javascript" />
        <Pinned title="Movie-Info-Search" tool="javascript" />
      </div>
    </div>
  );
}

export default Overview;

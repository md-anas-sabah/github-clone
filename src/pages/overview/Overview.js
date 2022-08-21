import React from "react";
import Pinned from "../../components/pinned/Pinned";
import "./Overview.css";

function Overview() {
  return (
    <div className="overview">
      <p>Pinned</p>
      <div className="overview__pinned">
        <Pinned />
        <Pinned />
        <Pinned />
        <Pinned />
        <Pinned />
        <Pinned />
      </div>
    </div>
  );
}

export default Overview;

import React from "react";
import "./Pinned.css";

function Pinned() {
  return (
    <div className="pinned">
      <div className="pinned__title">
        <div className="title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.4"
            height="13.4"
            fill="currentColor"
            class="bi bi-pin-fill"
            viewBox="0 0 16 16"
          >
            <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
          </svg>
          <a href="./">Dice Game</a>
          <p className="public">Public</p>
        </div>
        <div className="pinned__tools">
          <div
            className="tool__color"
            style={{ backgroundColor: "rgb(86,61,124)" }}
          ></div>
          <p>CSS</p>
        </div>
      </div>

      <div className="pinned__drag">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-grip-vertical"
          viewBox="0 0 16 16"
        >
          <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      </div>
    </div>
  );
}

export default Pinned;

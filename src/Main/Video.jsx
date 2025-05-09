// src/VideoPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Video.css";

import videoFile from "../assets/Video.mp4";

import MCT from "../assets/logo-MCT.svg";
import foxy from "../assets/foxy.svg";
import { useEffect } from "react";

function Video() {
  const navigate = useNavigate();

  useEffect(() => {
    let section = document.querySelector("#here");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <div
      id="here"
      style={{
        textAlign: "center",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >


      <div className="aaa">
      




      <div className="sectionTwoVideo">
        

      <video
            src={videoFile}
            autoPlay
            muted
            loop
            controls
            playsInline
            className="customVideo"
          />

      </div>

      <div className="bouton">
      <button
          className="btn"
          onClick={() => navigate(-1)}
          style={{ marginBottom: "20px", marginTop: "100px" }}
        >
          Retour
        </button>

        </div>

      </div>
    </div>
  );
}

export default Video;

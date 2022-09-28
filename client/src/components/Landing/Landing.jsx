import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
export default function LandingPage() {
  return (
    <div className="container">
      <h1 className="welcome-title">Welcome </h1>
      <h3 className="welcome-subtitle">What will we cook today?</h3>
      <Link to="/home">
        <button className="btn-landing-page">Enter Site</button>
      </Link>
    </div>
  );
}

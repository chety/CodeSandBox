import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export function Home() {
  return (
    <div className="container">
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      Home Component
    </div>
  );
}

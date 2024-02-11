import React from "react";
import Sidebar from "./components/Sidebar";
import "./components/Sidebar.css";

export default function Home() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <h1>Welcome to the Index</h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  );
}

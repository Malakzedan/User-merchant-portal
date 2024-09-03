import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div style={{ display: "flex", flexGrow: 1 }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Outlet /> {/* Content area */}
        {/* Content goes here */}
        {/* Welcome to the Main Component! */}
      </div>
    </div>
  );
}

export default Main;

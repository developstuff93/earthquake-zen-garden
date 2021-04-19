import React from "react";
import AppStateProvider from "components/AppStateProvider";
import NavBar from "components/NavBar";
import Routing from "components/Routing";
import "sass/app.scss";

export default function App() {
  return (
    <div className="app-wrapper">
      <AppStateProvider>
        <div className="header">
          <NavBar />
        </div>
        <div className="main">
          <Routing />
        </div>
      </AppStateProvider>
    </div>
  );
}

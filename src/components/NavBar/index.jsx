import React from "react";
import useAppState from "hooks/useAppState";
import "./style.scss";

export default function NavBar() {
  const { site, profile } = useAppState();
  return (
    <div className="nav-bar">
      <a className="nav-bar-logo" href="/">
        <img alt="logo" src={site.logoImage} />
      </a>
      <div className="nav-bar-title">
        <h1>{site.title}</h1>
      </div>
      <a className="nav-bar-user" href="/profile">
        {`Welcome ${profile.firstName}`}
      </a>
    </div>
  );
}

import React from "react";
import useAppState from "hooks/useAppState";
import { META_INFO } from "util/constants";
import "./style.scss";

export default function ProfilePage() {
  const { profile } = useAppState();

  const renderRow = (meta) => {
    return (
      <div className="row" key={meta.key}>
        <span className="col label">{meta.label}</span>
        <span className="col content">
          {meta.linkPre ? (
            <a href={`${meta.linkPre}${profile[meta.key]}`}>
              {profile[meta.key]}
            </a>
          ) : (
            profile[meta.key]
          )}
        </span>
      </div>
    );
  };

  return (
    <div className="profile">
      <h3>Profile</h3>
      <div className="profile-details">
        <div className="profile-details__image">
          <img alt="avatar" src={profile.avatarImage} />
        </div>
        <div className="profile-details__meta">
          {META_INFO.map((meta) => renderRow(meta))}
        </div>
      </div>
    </div>
  );
}

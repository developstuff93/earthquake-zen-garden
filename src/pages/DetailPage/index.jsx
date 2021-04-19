import React, { useMemo } from "react";
import { useParams } from "react-router";
import useAppState from "hooks/useAppState";
import { FEATURE_DETAIL_TYPES } from "util/constants";
import "./style.scss";

export default function DetailPage() {
  const { id } = useParams();
  const { data } = useAppState();
  const properties = useMemo(() => {
    const feature = data.features.find((feature) => feature.id === id);
    return feature?.properties;
  }, [id, data.features]);

  if (!properties) {
    return (
      <div className="detail">
        <h3>Not Found</h3>
      </div>
    );
  }

  return (
    <div className="detail">
      <h3>{properties.title}</h3>
      <div className="feature-details">
        {FEATURE_DETAIL_TYPES.map((type) => (
          <div className="row" key={type.key}>
            <div className="col label">{type.label}</div>
            <div className="col content">{properties[type.key]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

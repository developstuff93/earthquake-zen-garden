import React, { useMemo, useState } from "react";
import useAppState from "hooks/useAppState";
import { FEATURES_TABLE_COLUMNS } from "util/constants";
import { customSort, formatTime } from "util/util";
import "./style.scss";

export default function HomePage() {
  const [sortDir, setSortDir] = useState(false);
  const [sortBy, setSortBy] = useState();
  const { data } = useAppState();
  const sortedData = useMemo(() => {
    if (!sortBy) return data.features;
    return data.features.sort((a, b) =>
      customSort(
        a.properties[sortBy],
        b.properties[sortBy],
        FEATURES_TABLE_COLUMNS[sortBy].type,
        sortDir
      )
    );
  }, [sortBy, sortDir, data.features]);
  return (
    <div className="home">
      <h3>{data.metadata.title}</h3>
      <table className="feature-table">
        <thead>
          <tr>
            {Object.keys(FEATURES_TABLE_COLUMNS).map((key) => (
              <th
                key={key}
                className={key === sortBy ? (sortDir ? "up" : "down") : ""}
                onClick={() => {
                  setSortBy(FEATURES_TABLE_COLUMNS[key].property);
                  setSortDir(!sortDir);
                }}
              >
                {FEATURES_TABLE_COLUMNS[key].label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((feature) => {
            const { place: title, mag, time } = feature.properties;
            return (
              <tr key={feature.id}>
                <td className="title">
                  <a href={`features/${feature.id}`}>{title}</a>
                </td>
                <td className="mag">{mag}</td>
                <td className="time">{formatTime(new Date(time))}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";

import "./ResultItem.css";

const ResultItem = ({ item }) => {
  return (
    <div className="result-item item">
      <img
        className="ui image"
        src={item.fields.thumbnail}
        alt={item.fields.headline}
      />
      <div className="content">
        <div className="header">{item.fields.headline}</div>
      </div>
    </div>
  );
};

export default ResultItem;

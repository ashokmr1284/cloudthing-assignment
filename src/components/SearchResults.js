import React from "react";

import ResultItem from "./ResultItem";

const SearchResults = ({ results }) => {
  const renderedList = results.map((item) => (
    <ResultItem key={item.id} item={item} />
  ));

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default SearchResults;

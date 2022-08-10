import React from "react";

const NewsSearch = ({ handleChange }) => {
  return (
    <div>
      <input onChange={handleChange}></input>
    </div>
  );
};

export default NewsSearch;

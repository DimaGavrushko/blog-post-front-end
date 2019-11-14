import React, { useEffect } from "react";
import { API_URL } from "../../constants/api";

const News = () => {
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(console.log);
  }, []);

  return (
    <div>
      <h1>News</h1>
    </div>
  );
};

export default News;

import React, { useEffect } from "react";
import { API_URL } from "../../constants/api";
import PopularPosts from "../../components/PopularPosts";

const News = () => {
  /*useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(console.log);
  }, []);*/

  return (
    <>
      <PopularPosts />
    </>
  );
};

export default News;

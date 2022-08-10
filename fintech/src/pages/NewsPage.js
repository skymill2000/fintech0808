import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";
import NewsList from "../components/news/NewsList";
import NewsSearch from "../components/news/NewsSearch";

const NewsPage = () => {
  const [searchInput, setSearchInput] = useState("");
  //1. searchInput 데이터를 newsSearch 컴포넌트로 부터 받아 오기
  const [searchList, setSearchList] = useState([]);
  //2. axios를 통해서 데이터를 요청하여 내역 searchList 채우기

  const handleChange = () => {
    console.log("change Event");
  };

  return (
    <div>
      <AppHeader title={"뉴스 검색"}></AppHeader>
      <NewsSearch handleChange={handleChange}></NewsSearch>
      <NewsList></NewsList>
    </div>
  );
};

export default NewsPage;

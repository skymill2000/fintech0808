import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";
import NewsList from "../components/news/NewsList";
import NewsSearch from "../components/news/NewsSearch";

const NewsPage = () => {
  const [searchInput, setSearchInput] = useState("");
  //1. searchInput 데이터를 newsSearch 컴포넌트로 부터 받아 오기
  const [searchList, setSearchList] = useState([]);
  //2. axios를 통해서 데이터를 요청하여 내역 searchList 채우기

  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setSearchInput(value);
  };

  const handleClick = () => {
    console.log(searchInput);
    //search input 바탕으로 뉴스 검색 api Request 요청
    //axios 를 이용해서 데이터 리스폰스를 받아온 다음에 setSearchList
  };

  return (
    <div>
      <AppHeader title={"뉴스 검색"}></AppHeader>
      <NewsSearch
        handleChange={handleChange}
        handleClick={handleClick}
      ></NewsSearch>
      <NewsList newsList={searchList}></NewsList>
    </div>
  );
};

export default NewsPage;

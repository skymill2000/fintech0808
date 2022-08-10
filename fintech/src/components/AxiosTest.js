import React from "react";
import axios from "axios";

const AxiosTest = () => {
  const handleClick = () => {
    axios.get("https://naver.com").then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>요청 보내기</button>
    </div>
  );
};

export default AxiosTest;

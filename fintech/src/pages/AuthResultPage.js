import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import AppHeader from "../components/common/AppHeader";

const AuthResultPage = () => {
  const parsedCode = queryString.parse(useLocation().search);
  const [accessToken, setAccessToken] = useState("토큰을 받기 전");
  const [userSeqNo, setUserSeqNo] = useState("사용자 고유 식별 번호 받기 전");

  const handleClick = () => {
    console.log("토큰 요청");
  };

  return (
    <div>
      <AppHeader title={"인증결과"}></AppHeader>
      <p>인증 코드 : {parsedCode.code}</p>
      <p>accessToken : {accessToken}</p>
      <p>userSeqNo : {userSeqNo}</p>
      <button onClick={handleClick}>AccessToken 요청하기</button>
    </div>
  );
};

export default AuthResultPage;

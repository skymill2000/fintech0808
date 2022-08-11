import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import AppHeader from "../components/common/AppHeader";
import axios from "axios";

const AuthResultPage = () => {
  const { code } = queryString.parse(useLocation().search);
  const [accessToken, setAccessToken] = useState("토큰을 받기 전");
  const [userSeqNo, setUserSeqNo] = useState("사용자 고유 식별 번호 받기 전");

  const handleClick = () => {
    console.log("토큰 요청");

    const data = {
      code: code,
      client_id: "565a6aff-7182-4e43-8965-525a1c13a3d9",
      client_secret: "c68472dd-b377-48a0-a0c3-0a28b978ba28",
      redirect_uri: "http://localhost:3000/authResult",
      grant_type: "authorization_code",
    };

    const parsedUrlEncodedData = queryString.stringify(data);

    const option = {
      method: "POST",
      url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: parsedUrlEncodedData,
    };
    axios(option).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <AppHeader title={"인증결과"}></AppHeader>
      <p>인증 코드 : {code}</p>
      <p>accessToken : {accessToken}</p>
      <p>userSeqNo : {userSeqNo}</p>
      <button onClick={handleClick}>AccessToken 요청하기</button>
    </div>
  );
};

export default AuthResultPage;

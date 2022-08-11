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
      url: "/oauth/2.0/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: parsedUrlEncodedData,
    };

    axios(option).then(({ data }) => {
      console.log({ data });
      if (data.rsp_code !== "O0001") {
        setAccessToken(data.access_token);
        setUserSeqNo(data.user_seq_no);
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("userSeqNo", data.user_seq_no);
      } else {
        alert("토큰 발급에 실패했습니다.");
      }
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

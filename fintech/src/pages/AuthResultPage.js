import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const AuthResultPage = () => {
  const parsedCode = queryString.parse(useLocation().search);
  console.log("사용자 인증 코드 : ", parsedCode.code);
  return <div>AuthResultPage</div>;
};

export default AuthResultPage;

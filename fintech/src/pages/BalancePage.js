import React from "react";
import AppHeader from "../components/common/AppHeader";

const BalancePage = () => {
  /**
   * #work5 잔액조회 api 활용해서 데이터 조회하기
   * 핀테크 번호 balance?fintechUseNo=120220156488941132290860 여기에 핀테크 번호가 있습니다.
   * queryString Parsing 데이터를 가지고 오세요 (AuthResult)
   * 날짜는 그냥 고정값으로 오늘 날짜
   * axios option 통해서 데이터를 조회
   * BalanceCard 렌더링 해주세요 !
   */
  return (
    <div>
      <AppHeader title={"잔액조회"}></AppHeader>
    </div>
  );
};

export default BalancePage;

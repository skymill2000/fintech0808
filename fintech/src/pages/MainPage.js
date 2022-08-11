import React from "react";
import AppHeader from "../components/common/AppHeader";

const MainPage = () => {
  /**
   * #work4 요청을 작성 /v2.0/user/me?user_seq_no=1100034736
   * 해당 데이터를 받아온 다음에 console.log(계좌 목록에 관련된 array 출력 하세요)
   * console.log(data.res_list);
   *  1. localstroage 데이터를 가지고 올때 = localstorage.getItem("아이템명");
   * 요청을 만들때는 option 방식으로 작성하여 axios(option) 요청 생성
   */
  return (
    <div>
      <AppHeader title={"계좌 목록"}></AppHeader>
    </div>
  );
};

export default MainPage;

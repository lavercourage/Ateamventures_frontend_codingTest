import MaterialDropdown from "../dropdown/material/MaterialDropdown";
import MethodDropdown from "../dropdown/method/MethodDropdown";
import SwitchButton from "../switch/SwitchButton";
import CardBoard from "../card/CardBoard";
import * as M from "./MainBoard.styles";
import { useState } from "react";

const MainBoard = (props: any) => {
  const data = props.data;

  // 필터링 리셋 버튼
  const onClickRefreshButton = () => {};

  // 상담 중인 요청만 보기
  const [isConsult, setIsConsult] = useState(false);
  console.log("isConsult", isConsult);
  return (
    <>
      <M.Wrapper>
        <M.TopWrapper>
          <M.Title>들어온 요청</M.Title>
          <M.Content>파트너님에게 딱 맞는 요청서를 찾아보세요.</M.Content>
          <M.Filter>
            <M.InnerFilter>
              <MaterialDropdown />
              <MethodDropdown />
              {/* isSelect ? true : false */}
              <M.RefreshWrapper onClick={onClickRefreshButton}>
                <M.Icon src="/images/Refresh.svg" />
                <M.RefreshButton>필터링 리셋</M.RefreshButton>
              </M.RefreshWrapper>
              {/*  */}
            </M.InnerFilter>
            <M.InnerFilter>
              <SwitchButton setIsConsult={setIsConsult} />
              <M.InnerText>상담 중인 요청만 보기</M.InnerText>
            </M.InnerFilter>
          </M.Filter>
        </M.TopWrapper>
        <M.CardWrap>
          <CardBoard data={data} isConsult={isConsult} />
        </M.CardWrap>
        <M.NoneContent>조건에 맞는 견적 요청이 없습니다.</M.NoneContent>
      </M.Wrapper>
    </>
  );
};

export default MainBoard;

{
  /* 값에 따라서 아무것도 없으면 아래거 보이기 있으면 위에거 보이기(isEdit 사용했던 것 떠올리기) */
}

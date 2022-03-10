import { useState } from "react";
import * as M from "./MainBoard.styles";
import MethodDropdown from "../dropdown/MethodDropdown";
import MaterialDropdown from "../dropdown/MaterialDropdown";
import SwitchButton from "../button/SwitchButton";
import CardBoard from "../card/CardBoard";
import { IMainBoardProps } from "./MainBoard.types";

const MainBoard = (props: IMainBoardProps) => {
  const data = props.data;

  const [isConsult, setIsConsult] = useState<boolean>(false); // 스위치: 상담 중인 요청만 보기
  const [isMethodAmount, setIsMethodAmount] = useState<number>(0); // 가공방식: 체크 수
  const [isMaterialAmount, setIsMaterialAmount] = useState<number>(0); // 재료: 체크 수
  const [method, setmethod] = useState<string[]>([]);
  const material: string[] = [];

  // 필터링 리셋 버튼
  const onClickRefreshButton = () => {
    setIsMethodAmount(0);
    setIsMaterialAmount(0);
  };

  return (
    <>
      <M.Wrapper>
        <M.InnerWrapper_T>
          <M.Title>들어온 요청</M.Title>
          <M.Content>파트너님에게 딱 맞는 요청서를 찾아보세요.</M.Content>
          <M.Filter>
            <M.InnerWrapper_L>
              <MethodDropdown
                isMethodAmount={isMethodAmount}
                setIsMethodAmount={setIsMethodAmount}
                method={method}
              />
              <MaterialDropdown
                isMaterialAmount={isMaterialAmount}
                setIsMaterialAmount={setIsMaterialAmount}
              />
              {isMethodAmount || isMaterialAmount ? (
                <M.InnerWrapper_Refresh onClick={onClickRefreshButton}>
                  <M.Icon src="/images/Refresh.svg" />
                  <M.RefreshButton>필터링 리셋</M.RefreshButton>
                </M.InnerWrapper_Refresh>
              ) : (
                <></>
              )}
            </M.InnerWrapper_L>
            <M.InnerWrapper_R>
              <SwitchButton setIsConsult={setIsConsult} />
              <M.InnerText>상담 중인 요청만 보기</M.InnerText>
            </M.InnerWrapper_R>
          </M.Filter>
        </M.InnerWrapper_T>
        {isMaterialAmount ? (
          <M.NoneContent>조건에 맞는 견적 요청이 없습니다.</M.NoneContent>
        ) : (
          <M.CardWrap>
            <CardBoard data={data} isConsult={isConsult} />
          </M.CardWrap>
        )}
      </M.Wrapper>
    </>
  );
};

export default MainBoard;

{
  /* 값에 따라서 아무것도 없으면 아래거 보이기 있으면 위에거 보이기(isEdit 사용했던 것 떠올리기) */
}

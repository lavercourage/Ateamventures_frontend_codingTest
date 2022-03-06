import CardBoard from "../card/CardBoard";
import * as M from "./MainBoard.styles";
import MaterialDropdown from "../dropdown/material/MaterialDropdown";
import MethodDropdown from "../dropdown/method/MethodDropdown";
import SwitchButton from "../switch/SwitchButton";

const MainBoard = (props: any) => {
  const data = props.data;
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
            </M.InnerFilter>
            <M.InnerFilter>
              <SwitchButton />
              <M.InnerText>상담 중인 요청만 보기</M.InnerText>
            </M.InnerFilter>
          </M.Filter>
        </M.TopWrapper>
        <M.CardWrap>
          <CardBoard data={data} />
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

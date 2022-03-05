import CardBoard from "../card/CardBoard.container";
import * as M from "./MainBoard.styles";

const MainBoardUI = () => {
  return (
    <>
      <M.Wrapper>
        <M.TopWrapper>
          <M.Title>들어온 요청</M.Title>
          <M.Content>파트너님에게 딱 맞는 요청서를 찾아보세요.</M.Content>
          {/* <M.SelectWrapper>dd</M.SelectWrapper> */}
        </M.TopWrapper>
        <CardBoard />
        <M.NoneContent>조건에 맞는 견적 요청이 없습니다.</M.NoneContent>
      </M.Wrapper>
    </>
  );
};

export default MainBoardUI;

{
  /* 값에 따라서 아무것도 없으면 아래거 보이기 있으면 위에거 보이기(isEdit 사용했던 것 떠올리기) */
}

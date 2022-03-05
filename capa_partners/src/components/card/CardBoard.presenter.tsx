import * as C from "./CardBoard.styles";

const CardBoardUI = () => {
  return (
    <>
      <C.Wrapper>
        <C.InnterWrapper>
          <C.Title>자동차 시제품 제작</C.Title>
          <C.Tag>상담중</C.Tag>
        </C.InnterWrapper>
        <C.Company>A 고객사</C.Company>
        <C.Date>2020.12.14까지 납기</C.Date>
        <C.Border />
        <C.SubWrapper>
          <C.SubTitle>도면개수</C.SubTitle>
          <C.SubContent>2개</C.SubContent>
        </C.SubWrapper>
        <C.SubWrapper>
          <C.SubTitle>총 수량</C.SubTitle>
          <C.SubContent>100개</C.SubContent>
        </C.SubWrapper>
        <C.SubWrapper>
          <C.SubTitle>가공방식</C.SubTitle>
          <C.SubContent>밀링, 선반</C.SubContent>
        </C.SubWrapper>
        <C.SubWrapper>
          <C.SubTitle>재료</C.SubTitle>
          <C.SubContent>알루미늄</C.SubContent>
        </C.SubWrapper>
        <C.ButtonWrapper>
          <C.ButtonB>요청 내역 보기</C.ButtonB>
          <C.ButtonW>채팅하기</C.ButtonW>
        </C.ButtonWrapper>
      </C.Wrapper>
    </>
  );
};

export default CardBoardUI;

{
  /* 값에 따라서 아무것도 없으면 아래거 보이기 있으면 위에거 보이기(isEdit 사용했던 것 떠올리기) */
}

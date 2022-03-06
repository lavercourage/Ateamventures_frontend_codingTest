import * as C from "./CardBoard.styles";

const CardBoard = (props: any) => {
  return (
    <>
      {props.data.map((el: any) => (
        <C.Wrapper key={el.id}>
          <C.InnterWrapper>
            <C.Title>{el.title}</C.Title>
            {el.status === "상담중" ? <C.Status>{el.status}</C.Status> : <></>}
          </C.InnterWrapper>
          <C.Client>{el.client}</C.Client>
          <C.Due>{el.due}까지 납기</C.Due>
          <C.Border />
          <C.SubWrapper>
            <C.SubTitle>도면개수</C.SubTitle>
            <C.SubContent>{el.count}개</C.SubContent>
          </C.SubWrapper>
          <C.SubWrapper>
            <C.SubTitle>총 수량</C.SubTitle>
            <C.SubContent>{el.amount}개</C.SubContent>
          </C.SubWrapper>
          <C.SubWrapper>
            <C.SubTitle>가공방식</C.SubTitle>
            <C.SubContent>{el.method.join(", ")}</C.SubContent>
          </C.SubWrapper>
          <C.SubWrapper>
            <C.SubTitle>재료</C.SubTitle>
            <C.SubContent>{el.material.join(", ")}</C.SubContent>
          </C.SubWrapper>
          <C.ButtonWrapper>
            <C.ButtonB>요청 내역 보기</C.ButtonB>
            <C.ButtonW>채팅하기</C.ButtonW>
          </C.ButtonWrapper>
        </C.Wrapper>
      ))}
    </>
  );
};

export default CardBoard;

{
  /* 값에 따라서 아무것도 없으면 아래거 보이기 있으면 위에거 보이기(isEdit 사용했던 것 떠올리기) */
}

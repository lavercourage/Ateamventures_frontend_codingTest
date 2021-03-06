import RequestViewButton from "../button/RequestViewButton";
import ChattingButton from "../button/ChattingButton";
import { ICardBoardProps, ICardBoard } from "./CardBoard.types";

import * as C from "./CardBoard.styles";

const CardBoard = (props: ICardBoardProps) => {
  return (
    <>
      {props.isConsult
        ? props.data
            .filter((el: ICardBoard) => el.status === "상담중")
            .map((el: ICardBoard) => (
              <div key={el.id}>
                {el.status === "상담중" && (
                  // 상태 : 상담 중인 요청만 보기
                  <C.Wrapper>
                    <C.InnerWrapper>
                      <C.Title>{el.title}</C.Title>
                      <C.Status>{el.status}</C.Status>
                    </C.InnerWrapper>
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
                      <RequestViewButton />
                      <ChattingButton />
                    </C.ButtonWrapper>
                  </C.Wrapper>
                )}
              </div>
            ))
        : // 상태 : 모든 요청 보기
          props.data.map((el: ICardBoard) => (
            <C.Wrapper key={el.id}>
              <C.InnerWrapper>
                <C.Title>{el.title}</C.Title>
                {el.status === "상담중" ? (
                  <C.Status>{el.status}</C.Status>
                ) : (
                  <></>
                )}
              </C.InnerWrapper>
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
                <RequestViewButton />
                <ChattingButton />
              </C.ButtonWrapper>
            </C.Wrapper>
          ))}
    </>
  );
};

export default CardBoard;

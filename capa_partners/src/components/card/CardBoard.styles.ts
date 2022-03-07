import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 366px;
  height: 356px;
  padding: 24px 16px;
  background-color: #ffffff;
  :hover {
    outline: 2px solid #2196f3;
  }
  outline: 1px solid #e5e5e5;
  border-radius: 4px;
`;

export const InnterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-family: "NotoSansKRB";
  font-size: 16px;
  line-height: 1.5;
`;

export const Status = styled.div`
  width: 50px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px solid #ffa000;
  border-radius: 12px;
  color: #ffa000;
  font-family: "NotoSansKRM";
  font-size: 12px;
  text-align: center;
`;

export const Client = styled.div`
  height: 20px;
  margin-top: 4px;
  font-family: "NotoSansKRM";
  font-size: 14px;
  line-height: 1.4;
`;

export const Due = styled.div`
  height: 20px;
  margin-top: 24px;
  color: #939fa5;
  font-family: "NotoSansKRR";
  font-size: 14px;
  line-height: 1.4;
`;

export const Border = styled.div`
  margin: 16px 0 32px;
  border-top: 1px solid #e5e5e5;
`;

export const SubWrapper = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;

export const SubTitle = styled.div`
  width: 70px;
  height: 20px;
  font-family: "NotoSansKRR";
  font-size: 14px;
  line-height: 1.4;
`;

export const SubContent = styled.div`
  width: 232px;
  height: 20px;
  font-family: "NotoSansKRB";
  font-size: 14px;
  line-height: 1.4;
`;

export const ButtonWrapper = styled.div`
  margin-top: 24px;
  display: flex;
`;

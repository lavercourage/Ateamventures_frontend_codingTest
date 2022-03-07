import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 40px 0 60px;
`;

export const TopWrapper = styled.div`
  width: 1130px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: "NotoSansKRB";
  font-size: 20px;
  line-height: 1.6;
`;

export const Content = styled.span`
  font-family: "NotoSansKRR";
  font-size: 16px;
  line-height: 1.5;
`;

export const Filter = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InnerFilter = styled.div`
  display: flex;
  align-items: center;
`;

export const RefreshWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  height: 24px;
  margin-right: 8px;
`;

export const RefreshButton = styled.span`
  color: #2196f3;
  font-size: 12px;
`;

export const InnerText = styled.span`
  margin-left: 16px;
  font-family: "NotoSansKRM";
  font-size: 14px;
  line-height: 1.4;
`;

export const NoneContent = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px solid #c2c2c2;
  border-radius: 4px;
  color: #939fa5;
  font-family: "NotoSansKRR";
  font-size: 14px;
  text-align: center;
`;

export const CardWrap = styled.div`
  display: flex;
  flex-direction: row;
  display: grid;
  grid-template-columns: repeat(3, 366px);
  gap: 16px;
`;

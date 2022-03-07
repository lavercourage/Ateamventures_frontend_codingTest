import styled from "@emotion/styled";
import { breakPoints } from "../../commons/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopWrapper = styled.div`
  width: 1130px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
    width: 320px;
    flex-direction: column;
    align-items: flex-start;
  }
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

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InnerFilterLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const InnerFilterRight = styled.div`
  display: flex;
  align-items: center;

  @media ${breakPoints.mobile} {
    margin-top: 20px;
    font-family: "NotoSansKRM";
    font-size: 14px;
    line-height: 1.4;
  }
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
  font-family: "NotoSansKRR";
  font-size: 12px;
`;

export const InnerText = styled.span`
  margin-left: 16px;
  font-family: "NotoSansKRM";
  font-size: 14px;
  line-height: 1.4;
`;

export const NoneContent = styled.div`
  width: 1130px;
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

  @media ${breakPoints.mobile} {
    width: 320px;
  }
`;

export const CardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 366px);
  gap: 16px;

  @media ${breakPoints.mobile} {
    display: grid;
    grid-template-columns: repeat(1, 320px);
    gap: 16px;
  }
`;

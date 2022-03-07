import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/media";

export const Wrapper = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 40px;
  background-color: #1565c0;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakPoints.mobile} {
    height: 44px;
    padding: 0 20px;
  }
`;

export const MenuIcon = styled.img`
  display: none;

  @media ${breakPoints.mobile} {
    height: 20px;
    display: flex;
  }
`;

export const Logo = styled.img`
  height: 20px;

  @media ${breakPoints.mobile} {
    height: 12px;
    margin-left: 16px;
  }
`;

export const Menu = styled.span`
  display: flex;
  align-items: center;
`;

export const TitleWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const BuildIcon = styled.img`
  height: 15px;
  margin-right: 8px;
`;

export const Title = styled.span`
  color: #ffffff;
  font-size: 14px;
  :hover {
    cursor: pointer;
  }
`;

export const Bar = styled.div`
  width: 1px;
  height: 16px;
  margin: 0 32px;
  background-color: #ffffff;
`;

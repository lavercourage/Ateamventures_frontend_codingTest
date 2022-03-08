import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/media";

export const WrapperWeb = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1565c0;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24);
  @media ${breakPoints.mobile} {
    height: 44px;
    padding: 0 20px;
  }
`;

export const InnerWrapper_WL = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuIcon = styled.img<{ isOpen: boolean }>`
  display: none;
  @media ${breakPoints.mobile} {
    height: 20px;
    display: flex;
    :hover {
      cursor: pointer;
    }
  }
`;

export const LogoWeb = styled.img`
  height: 20px;
  @media ${breakPoints.mobile} {
    height: 12px;
    margin-left: 16px;
  }
`;

export const MenuWeb = styled.span`
  display: flex;
  align-items: center;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const TitleWrapper = styled.span`
  display: flex;
  align-items: center;
  @media ${breakPoints.mobile} {
    margin-bottom: 24px;
  }
`;

export const BuildIcon = styled.img`
  height: 15px;
  margin-right: 8px;
`;

export const TitleWeb = styled.span`
  color: #ffffff;
  font-size: 14px;
  :hover {
    cursor: default;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Bar = styled.div`
  width: 1px;
  height: 16px;
  margin: 0 32px;
  background-color: #ffffff;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 1px;
    margin: 0;
    background-color: none;
    border-top: 1px solid #e5e5e5;
  }
`;

export const WrapperMobile = styled.div<{ isOpen: boolean }>`
  display: none;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100vh;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    transition: all 0.4s;
    position: fixed;
    top: 0;
    left: ${(props) => (props.isOpen ? 0 : "-360px")};
  } ;
`;

export const InnerWrapper_ML = styled.div`
  @media ${breakPoints.mobile} {
    width: 280px;
    height: 100%;
    background-color: #ffffff;
  }
`;

export const LogoMobile = styled.img`
  height: 12px;
  margin: 16px 20px;
`;

export const MenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  margin-left: 32px;
`;

export const TitleMobile = styled.span`
  color: #000000;
  font-size: 14px;
  :hover {
    cursor: default;
  }
`;

export const InnerWrapper_MR = styled.div<{ isOpen: boolean }>`
  width: calc(100vw - 280px);
  height: 100%;
  transition: all 0.4s;
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? `calc(-100vw)` : 0)};
  background-color: #000000;
  opacity: 0.5;
`;

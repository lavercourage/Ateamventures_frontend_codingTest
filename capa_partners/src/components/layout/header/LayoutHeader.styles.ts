import styled from "@emotion/styled";

export const Wrapper = styled.header`
  /* position: fixed; */
  width: 100%;
  height: 70px;
  padding: 0 40px;
  background-color: #1565c0;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 153px;
`;

export const Menu = styled.span`
  display: flex;
  align-items: center;
`;

export const TitleWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  height: 15px;
  margin-right: 8px;
`;

export const Title = styled.span`
  font-size: 14px;
  color: #ffffff;
`;

export const Bar = styled.div`
  width: 1px;
  height: 16px;
  background-color: #ffffff;
  margin: 0 32px;
`;

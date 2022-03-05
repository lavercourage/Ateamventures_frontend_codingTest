import LayoutHeader from "./header/LayoutHeader.container";
import styled from "@emotion/styled";

const Layout = (props: any) => {
  return (
    <>
      <LayoutHeader />
      <Body>{props.children}</Body>
    </>
  );
};

export default Layout;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

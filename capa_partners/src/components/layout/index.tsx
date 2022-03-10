import LayoutHeader from "./header/LayoutHeader";
import styled from "@emotion/styled";

interface ILayoutProps {
  children?: any;
}

const Layout = (props: ILayoutProps) => {
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

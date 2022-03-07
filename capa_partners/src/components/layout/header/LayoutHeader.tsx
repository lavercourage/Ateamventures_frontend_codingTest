import * as H from "./LayoutHeader.styles";

const LayoutHeader = () => {
  return (
    <H.Wrapper>
      <H.MenuIcon src="/images/Menu.svg" />
      <H.Logo src="/images/MainLogo.svg" />
      <H.Menu>
        <H.TitleWrapper>
          <H.BuildIcon src="/images/Build.svg" />
          <H.Title style={{ fontFamily: "NotoSansKRM" }}>A 가공 업체</H.Title>
        </H.TitleWrapper>
        <H.Bar />
        <H.Title style={{ fontFamily: "NotoSansKRR" }}>로그아웃</H.Title>
      </H.Menu>
    </H.Wrapper>
  );
};

export default LayoutHeader;

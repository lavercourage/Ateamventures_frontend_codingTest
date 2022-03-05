import * as H from "./LayoutHeader.styles";

const LayoutHeaderUI = () => {
  return (
    <H.Wrapper>
      <H.Logo src="/images/MainLogo.svg" />
      <H.Menu>
        <H.TitleWrapper>
          <H.Icon src="/images/Build.svg" />
          <H.Title style={{ fontFamily: "NotoSansKRM" }}>A 가공 업체</H.Title>
        </H.TitleWrapper>
        <H.Bar />
        <H.Title style={{ fontFamily: "NotoSansKRR" }}>로그아웃</H.Title>
      </H.Menu>
    </H.Wrapper>
  );
};

export default LayoutHeaderUI;

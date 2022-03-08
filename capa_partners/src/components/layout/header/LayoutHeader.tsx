import * as H from "./LayoutHeader.styles";
import { useState } from "react";

const LayoutHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <H.AAA isOpen={isOpen}>
        <H.BBB>
          <H.LogoMobile src="/images/MainLogoBlue.svg" />
          <H.Bar />
          <H.DDD>
            <H.TitleWrapper>
              <H.BuildIcon src="/images/BuildBlack.svg" />
              <H.TitleMobile style={{ fontFamily: "NotoSansKRM" }}>
                A 가공 업체
              </H.TitleMobile>
            </H.TitleWrapper>
            <H.TitleMobile style={{ fontFamily: "NotoSansKRR" }}>
              로그아웃
            </H.TitleMobile>
          </H.DDD>
        </H.BBB>
        <H.CCC onClick={onClickMenu} isOpen={!isOpen} />
      </H.AAA>
      {/*  */}
      {/*  */}
      <H.Wrapper>
        <H.LeftWrapper>
          <H.MenuIcon
            onClick={onClickMenu}
            isOpen={isOpen}
            src="/images/Menu.svg"
          />
          <H.Logo src="/images/MainLogoWhite.svg" />
        </H.LeftWrapper>
        <H.Menu>
          <H.TitleWrapper>
            <H.BuildIcon src="/images/BuildWhite.svg" />
            <H.Title style={{ fontFamily: "NotoSansKRM" }}>A 가공 업체</H.Title>
          </H.TitleWrapper>
          <H.Bar />
          <H.Title style={{ fontFamily: "NotoSansKRR" }}>로그아웃</H.Title>
        </H.Menu>
      </H.Wrapper>
    </>
  );
};

export default LayoutHeader;

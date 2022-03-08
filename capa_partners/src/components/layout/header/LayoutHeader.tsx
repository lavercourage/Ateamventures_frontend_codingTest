import * as H from "./LayoutHeader.styles";
import { useState } from "react";

const LayoutHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* 웹버전 헤더 영역 */}
      <H.WrapperWeb>
        <H.InnerWrapper_WL>
          <H.MenuIcon
            onClick={onClickMenu}
            isOpen={isOpen}
            src="/images/Menu.svg"
          />
          <H.LogoWeb src="/images/MainLogoWhite.svg" />
        </H.InnerWrapper_WL>
        <H.MenuWeb>
          <H.TitleWrapper>
            <H.BuildIcon src="/images/BuildWhite.svg" />
            <H.TitleWeb style={{ fontFamily: "NotoSansKRM" }}>
              A 가공 업체
            </H.TitleWeb>
          </H.TitleWrapper>
          <H.Bar />
          <H.TitleWeb style={{ fontFamily: "NotoSansKRR" }}>
            로그아웃
          </H.TitleWeb>
        </H.MenuWeb>
      </H.WrapperWeb>

      {/* 모바일버전 헤더 영역 */}
      <H.WrapperMobile isOpen={isOpen}>
        <H.InnerWrapper_ML>
          <H.LogoMobile src="/images/MainLogoBlue.svg" />
          <H.Bar />
          <H.MenuMobile>
            <H.TitleWrapper>
              <H.BuildIcon src="/images/BuildBlack.svg" />
              <H.TitleMobile style={{ fontFamily: "NotoSansKRM" }}>
                A 가공 업체
              </H.TitleMobile>
            </H.TitleWrapper>
            <H.TitleMobile style={{ fontFamily: "NotoSansKRR" }}>
              로그아웃
            </H.TitleMobile>
          </H.MenuMobile>
        </H.InnerWrapper_ML>
        <H.InnerWrapper_MR onClick={onClickMenu} isOpen={!isOpen} />
      </H.WrapperMobile>
    </>
  );
};

export default LayoutHeader;

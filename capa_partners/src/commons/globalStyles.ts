import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "NotoSansKRB";
    src: url("/fonts/NotoSansKR-Bold.otf");
  }

  @font-face {
    font-family: "NotoSansKRM";
    src: url("/fonts/NotoSansKR-Medium.otf");
  }

  @font-face {
    font-family: "NotoSansKRR";
    src: url("/fonts/NotoSansKR-Regular.otf");
  }
`;

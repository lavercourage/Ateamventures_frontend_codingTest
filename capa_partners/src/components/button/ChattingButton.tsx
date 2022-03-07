import styled from "@emotion/styled";

const ChattingButton = () => {
  return <Button>채팅하기</Button>;
};

export default ChattingButton;

const Button = styled.button`
  width: 76px;
  height: 32px;
  margin-left: 8px;
  background-color: #ffffff;
  border: 1px solid #2196f3;
  border-radius: 4px;
  color: #2196f3;
  font-family: "NotoSansKRM";
  font-size: 14px;
  :hover {
    cursor: pointer;
  }
`;

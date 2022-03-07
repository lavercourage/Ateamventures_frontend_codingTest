import styled from "@emotion/styled";

const RequestViewButton = () => {
  return <Button>요청 내역 보기</Button>;
};

export default RequestViewButton;

const Button = styled.button`
  width: 108px;
  height: 32px;
  background-color: #2196f3;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-family: "NotoSansKRM";
  font-size: 14px;
  :hover {
    cursor: pointer;
  }
`;

import { Menu, Dropdown, Button, Checkbox } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

// 드롭다운
const handleButtonClick = (e: any) => {
  // message.info("Click on left button.");
  console.log("click left button", e);
};

const handleMenuClick = (e: any) => {
  console.log("click", e);
};

// 체크
const onChange = (e: any) => {
  console.log(`checked = ${e.target.checked}`);
};

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Checkbox onChange={onChange}>밀링</Checkbox>
    </Menu.Item>
    <Menu.Item key="2">
      <Checkbox onChange={onChange}>선반</Checkbox>
    </Menu.Item>
  </Menu>
);

const MaterialDropdown = () => {
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button>
        가공방식
        <CaretDownOutlined />
      </Button>
    </Dropdown>
  );
};

export default MaterialDropdown;

// 체크 선택 시 state값 변화를 줘서 배경 색 변경
// 선택한 체크 개수만큼 메뉴바에 숫자 적어넣기 { aaa ? {~}개 : <></>}
// 선택한 체크가 있을 시 우측에 리셋버튼 놓기 { aaa ? 필터링 리셋 : <></>}

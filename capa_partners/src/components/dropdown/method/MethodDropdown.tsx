import styled from "@emotion/styled";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const handleButtonClick = (e: any) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};

const handleMenuClick = (e: any) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">알루미늄</Menu.Item>
    <Menu.Item key="2">탄소강</Menu.Item>
    <Menu.Item key="3">구리</Menu.Item>
    <Menu.Item key="4">합금강</Menu.Item>
    <Menu.Item key="5">강철</Menu.Item>
  </Menu>
);

const MethodDropdown = () => {
  return (
    <DropdownWrapper>
      <Dropdown overlay={menu}>
        <Button>
          재료
          <CaretDownOutlined />
        </Button>
      </Dropdown>
    </DropdownWrapper>
  );
};

export default MethodDropdown;

const DropdownWrapper = styled.div`
  margin-left: 8px;
`;

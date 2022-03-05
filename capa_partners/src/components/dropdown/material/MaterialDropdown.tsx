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
    <Menu.Item key="1">밀링</Menu.Item>
    <Menu.Item key="2">선반</Menu.Item>
  </Menu>
);

const MaterialDropdown = () => {
  return (
    <Dropdown overlay={menu} overlayStyle={{ width: "98px", height: "32px" }}>
      <Button>
        가공방식
        <CaretDownOutlined />
      </Button>
    </Dropdown>
  );
};

export default MaterialDropdown;

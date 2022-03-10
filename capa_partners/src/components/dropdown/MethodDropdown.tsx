import { useState } from "react";
import { Menu, Dropdown, Button, Checkbox } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { IMethodDropdownProps } from "./Dropdown.types";

const MethodDropdown = (props: IMethodDropdownProps) => {
  const handleMenuClick = (e: any) => {
    props.method.push(e);
  };

  // 체크
  const onChange = (e: any) => {
    if (e.target.checked === true) {
      props.setIsMethodAmount(props.isMethodAmount + 1);
    } else if (e.target.checked === false) {
      props.setIsMethodAmount(props.isMethodAmount - 1);
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="밀링">
        <Checkbox onChange={onChange}>밀링</Checkbox>
      </Menu.Item>
      <Menu.Item key="선반">
        <Checkbox onChange={onChange}>선반</Checkbox>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button>
        {props.isMethodAmount
          ? `가공방식(${props.isMethodAmount})`
          : "가공방식"}
        <CaretDownOutlined />
      </Button>
    </Dropdown>
  );
};
export default MethodDropdown;

import { useState } from "react";
import styled from "@emotion/styled";
import { Menu, Dropdown, Button, Checkbox } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { IMaterialDropdownProps } from "./Dropdown.types";

const MaterialDropdown = (props: IMaterialDropdownProps) => {
  const handleMenuClick = (e: any) => {
    console.log("click", e);
  };

  // 체크
  const onChange = (e: any) => {
    if (e.target.checked === true) {
      props.setIsMaterialAmount(props.isMaterialAmount + 1);
    } else if (e.target.checked === false) {
      props.setIsMaterialAmount(props.isMaterialAmount - 1);
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="알루미늄">
        <Checkbox onChange={onChange}>알루미늄</Checkbox>
      </Menu.Item>
      <Menu.Item key="탄소강">
        <Checkbox onChange={onChange}>탄소강</Checkbox>
      </Menu.Item>
      <Menu.Item key="구리">
        <Checkbox onChange={onChange}>구리</Checkbox>
      </Menu.Item>
      <Menu.Item key="합금강">
        <Checkbox onChange={onChange}>합금강</Checkbox>
      </Menu.Item>
      <Menu.Item key="강철">
        <Checkbox onChange={onChange}>강철</Checkbox>
      </Menu.Item>
    </Menu>
  );

  return (
    <DropdownWrapper>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button>
          {props.isMaterialAmount ? `재료(${props.isMaterialAmount})` : "재료"}
          <CaretDownOutlined />
        </Button>
      </Dropdown>
    </DropdownWrapper>
  );
};

export default MaterialDropdown;

const DropdownWrapper = styled.div`
  margin-left: 8px;
`;

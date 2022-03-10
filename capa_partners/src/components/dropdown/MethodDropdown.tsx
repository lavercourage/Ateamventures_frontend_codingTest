import styled from "@emotion/styled";
import { Menu, Dropdown, Button, Checkbox } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { IMethodDropdownProps } from "./Dropdown.types";

const MethodDropdown = (props: IMethodDropdownProps) => {
  const handleMenuClick = (e: any) => {
    console.log("click", e);
  };

  // 체크
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
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

// 체크 선택 시 state값 변화를 줘서 배경 색 변경
// 선택한 체크 개수만큼 메뉴바에 숫자 적어넣기 { aaa ? `{~}개` : <></>}
// 선택한 체크가 있을 시 우측에 리셋버튼 놓기 { aaa ? 필터링 리셋 : <></>}

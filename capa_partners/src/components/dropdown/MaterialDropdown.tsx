import { Menu, Dropdown, Button, Checkbox } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const MaterialDropdown = (props: any) => {
  const handleMenuClick = (e: any) => {};

  // const menu = (
  //   <Menu onClick={handleMenuClick}>
  //     <Menu.Item key="밀링">
  //       <Checkbox
  //         onChange={(value) => {
  //           props.setIsCheck(value);
  //           console.log(value);
  //         }}
  //       >
  //         밀링
  //       </Checkbox>
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <Dropdown
      overlay={
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="밀링">
            <Checkbox
              onChange={(value) => {
                props.setIsCheck(value);
              }}
            >
              밀링
            </Checkbox>
          </Menu.Item>
          <Menu.Item key="선반">
            <Checkbox
              onChange={(value) => {
                props.setIsCheck(value);
              }}
            >
              선반
            </Checkbox>
          </Menu.Item>
        </Menu>
      }
      trigger={["click"]}
    >
      <Button>
        가공방식
        <CaretDownOutlined />
      </Button>
    </Dropdown>
  );
};

export default MaterialDropdown;

// 체크 선택 시 state값 변화를 줘서 배경 색 변경
// 선택한 체크 개수만큼 메뉴바에 숫자 적어넣기 { aaa ? `{~}개` : <></>}
// 선택한 체크가 있을 시 우측에 리셋버튼 놓기 { aaa ? 필터링 리셋 : <></>}
// console.log(`checked = ${value.target.checked}`);
// <Menu.Item key="선반">
//   <Checkbox
//     onChange={(value) => {
//       props.setIsCheck(value);
//       console.log(value);
//     }}
//   >
//     선반
//   </Checkbox>
// </Menu.Item>;

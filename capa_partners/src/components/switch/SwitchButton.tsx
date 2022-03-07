import { Switch } from "antd";

const SwitchButton = (props: any) => {
  return (
    <Switch
      defaultChecked={false}
      onChange={(value) => {
        props.setIsConsult(value);
      }}
    />
  );
};

export default SwitchButton;

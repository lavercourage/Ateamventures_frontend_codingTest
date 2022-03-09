import { Switch } from "antd";

const SwitchButton = (props: any) => {
  return (
    <Switch
      onChange={(value) => {
        props.setIsConsult(value);
        console.log("bbb", value);
      }}
    />
  );
};

export default SwitchButton;

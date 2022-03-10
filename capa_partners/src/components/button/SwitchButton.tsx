import { Switch } from "antd";

interface ISwitchButtonProps {
  setIsConsult: boolean | any;
}

const SwitchButton = (props: ISwitchButtonProps) => {
  return (
    <Switch
      onChange={(value) => {
        props.setIsConsult(value);
      }}
    />
  );
};

export default SwitchButton;

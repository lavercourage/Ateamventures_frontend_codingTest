import { Switch } from "antd";
import { SwitchChangeEventHandler } from "antd/lib/switch";
import { ChangeEvent } from "react";

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

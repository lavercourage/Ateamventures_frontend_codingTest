import { Switch } from "antd";

const onChange = (checked: any) => {
  console.log(`switch to ${checked}`);
};

const SwitchButton = () => {
  return <Switch defaultChecked={false} onChange={onChange} />;
};

export default SwitchButton;

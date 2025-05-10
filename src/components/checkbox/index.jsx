import React from "react";
import { Checkbox } from "antd";
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const CheckboxCustom = () => (
  <Checkbox style={{ color: "blue" }} onChange={onChange}>
    Checkbox
  </Checkbox>
);
export default CheckboxCustom;

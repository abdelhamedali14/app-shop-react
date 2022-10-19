import { useState } from "react";
import "./Container.css";
import IncreaseCounter from "./IncreaseCounter";
import DecreaseCounter from "./DecreaseCounter";
import CounterValue from "./CounterValue";
import Reset from "./Reset";
const Container = () => {
  const [value, setValue] = useState(0);
  const updatedValue = (newValue) => {
    setValue(newValue);
  };




  return (
    <div className="counter">
      <IncreaseCounter
        updateValue={updatedValue}
        currentValue={value}
      />
      <CounterValue currentValue={value}></CounterValue>
  
      <DecreaseCounter
        updateValue={updatedValue}
        currentValue={value}
      />
      <Reset updateValue={updatedValue} ></Reset>
    </div>
  );
};

export default Container;

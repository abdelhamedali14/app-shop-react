import "./Container.css"
const IncreaseCounter = (props) => {
    const increase = () => {
        let value = props.currentValue;
        props.updateValue(value + 1);
    };
    return <button className="increase btn"  onClick={increase}>+</button>;
};

export default IncreaseCounter;


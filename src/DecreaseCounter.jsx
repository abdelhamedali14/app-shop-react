import "./Container.css"

const DecreaseCounter = (props) => {
    const decrease = () => {
        let value = props.currentValue;
        value ===  0?props.updateValue(value):props.updateValue(value-1)
    };
    return <button className="decrease btn" onClick={decrease}>-</button>;
};

export default DecreaseCounter;

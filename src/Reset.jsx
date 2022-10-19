import "./Container.css";

export default function Reset(props) {
  const resethandler = () => {
    props.updateValue(0);
  };

  return (
    <div className="Reset">
      <button className="btn reset" onClick={resethandler}>
        Reset
      </button>
    </div>
  );
}

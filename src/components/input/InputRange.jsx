import { useState } from "react";
import useStyleStore from "../../store/CssStore";
const InputRange = ({ name, property }) => {
  const [rangeUnit, setRangeUnit] = useState("");
  const setRangeState = useStyleStore((state) => state.changeStyle);
  const handleSelected = (value) => {
    setRangeUnit(`${value}px`);
    setRangeState({
      property: property,
      value: `${value}px`,
    });
  };
  return (
    <div
      className="form-group d-flex align-items-center mb-30"
      style={{ gap: "32px" }}
    >
      <label
        htmlFor="formControlRange"
        className="cubex-label position-relative"
      >
        {name}
        <small
          style={{
            fontSize: "10px",
            position: "absolute",
            top: "0",
            right: "5px",
          }}
        >
          {rangeUnit}
        </small>
      </label>

      <input
        type="range"
        className="form-control-range"
        id="formControlRange"
        min={0}
        max={100}
        onChange={(e) => handleSelected(e.target.value)}
      />
    </div>
  );
};

export default InputRange;

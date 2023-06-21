import React, { useState } from "react";

const InputColor = () => {
  const [colorState, setColorState] = useState("");
  return (
    <div className="d-flex align-items-center justify-content-between cubex-form-group mb-30">
      <label htmlFor="input-color" className="m-0">
        Color
      </label>
      <div className="wraper-color position-relative" id="input-color">
        <input type="color" className="cubex-input-color" />
        <div
          className="color-range"
          style={{ position: "absolute", width: "324.98px" }}
        >
          <input
            type="range"
            id="range-color"
            style={{ width: "100%" }}
            min={0}
            max={1}
            step={0.01}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default InputColor;

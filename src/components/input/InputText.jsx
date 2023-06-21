import React from "react";

const InputText = () => {
  return (
    <div className="d-flex align-items-center justify-content-between cubex-form-group mb-30">
      <label htmlFor="" className="m-0">
        Height
      </label>
      <input
        type="text"
        className="cubex-input"
        placeholder="Input"
        value={"0px"}
      />
    </div>
  );
};

export default InputText;

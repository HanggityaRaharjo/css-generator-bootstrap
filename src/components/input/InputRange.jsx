const InputRange = () => {
  return (
    <div
      class="form-group d-flex align-items-center mb-30"
      style={{ gap: "32px" }}
    >
      <label htmlFor="formControlRange" className="cubex-label">
        Border Radius
      </label>
      <input
        type="range"
        className="form-control-range"
        id="formControlRange"
      />
    </div>
  );
};

export default InputRange;

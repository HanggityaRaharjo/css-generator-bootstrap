const FilterSelect = () => {
  return (
    <div className="input-group" style={{ width: "250px" }}>
      <div className="input-group-prepend">
        <label
          className="input-group-text text-light"
          htmlFor="inputGroupSelect01"
          style={{ background: "#373737", border: "none" }}
        >
          Template
        </label>
      </div>
      <select
        defaultValue={"DEFAULT"}
        className="custom-select cubex-select"
        id="inputGroupSelect01"
        style={{ border: "none" }}
      >
        <option value={"DEFAULT"} disabled>
          Choose...
        </option>
        <option value="smartadmin">Smart Admin</option>
        <option value="sbadmin">SB Admin</option>
      </select>
    </div>
  );
};

export default FilterSelect;

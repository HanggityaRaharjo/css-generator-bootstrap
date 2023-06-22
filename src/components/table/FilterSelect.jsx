const FilterSelect = () => {
  return (
    <div className="input-group" style={{ width: "250px" }}>
      <div className="input-group-prepend">
        <label className="input-group-text " htmlFor="inputGroupSelect01">
          Template
        </label>
      </div>
      <select
        defaultValue={"DEFAULT"}
        className="custom-select cubex-select"
        id="inputGroupSelect01"
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

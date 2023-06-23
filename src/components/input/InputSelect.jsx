import useStyleStore from "../../store/CssStore";
const InputSelect = ({ value, name, property }) => {
  const selectState = useStyleStore((state) => state.changeStyle);

  const handleSelected = (value) => {
    selectState({
      property: property,
      value: value,
    });
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label
          className="input-group-text cubex-select-label text-light"
          htmlFor="inputGroupSelect01"
          style={{
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            padding: "0.375rem 15px",
            width: "140px",
            height: "45px",
            borderColor: "transparent",
          }}
        >
          {name}
        </label>
      </div>
      <select
        className="custom-select cubex-select"
        id="inputGroupSelect01"
        style={{
          width: "200px",
          height: "45px",
          borderTopRightRadius: "8px",
          borderBottomRightRadius: "8px",
          borderColor: "transparent",
        }}
        defaultValue={"none"}
        onChange={(e) => handleSelected(e.target.value)}
      >
        <option disabled>Choose...</option>
        {value.map((option, index) => (
          <option key={index} value={option.value}>
            {option.childName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;

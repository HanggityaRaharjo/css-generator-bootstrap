import useStyleStore from "../../store/CssStore";
const InputText = ({ name, property, defaultValue, placeholder, type }) => {
  const changeStyle = useStyleStore((state) => state.changeStyle);
  const handleSidebarValue = (value, componenStore) => {
    changeStyle({
      property: componenStore,
      value: value,
    });
  };
  return (
    <div className="d-flex align-items-center justify-content-between cubex-form-group mb-30">
      <label htmlFor="test" className="m-0">
        {name}
      </label>
      <input
        type={type}
        className="cubex-input"
        placeholder={placeholder}
        defaultValue={defaultValue}
        id={name}
        onChange={(e) => handleSidebarValue(e.target.value, property)}
      />
    </div>
  );
};

export default InputText;

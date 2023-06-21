const Col = ({ children, column }) => {
  return <div className={`col-md-${column}`}>{children}</div>;
};

export default Col;

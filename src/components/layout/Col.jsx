const Col = ({ children, column, className }) => {
  return <div className={`col-md-${column} ${className}`}>{children}</div>;
};

export default Col;

const SubHeader = ({ height, rounded, image, title, content }) => {
  return (
    <div
      className="bg-neutral d-flex align-items-center px-5 text-light mb-30"
      style={{ height: height, borderRadius: rounded, gap: "16px" }}
    >
      <div>
        <img src={image} alt="asd" width={"57px"} />
      </div>
      <div>
        <h4 className="sub-header-title">{title}</h4>
        <p className="sub-header-content">{content}</p>
      </div>
    </div>
  );
};

export default SubHeader;

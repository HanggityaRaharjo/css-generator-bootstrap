import React from "react";

const Navbar = () => {
  return (
    <div
      className="position-fixed text-light d-flex justify-content-between align-items-center"
      style={{}}
      id="cubex-navbar"
    >
      <div className="d-flex align-items-center">
        <img src="Logo-cubex.svg" alt="Logo-cubex" id="logo-cubex" />
        <button className="mr-5">
          <img src="hamburger-menu-icon.svg" alt="" />
        </button>
        <div>
          <input type="text" className="input input-dark" placeholder="Code" />
        </div>
      </div>
      {/* Kanan */}
      <div className="d-flex align-items-center" style={{ gap: "14px" }}>
        {/* Toggle */}
        <div className="toggle">
          <div className="toggle-switch"></div>
        </div>
        {/* End Toggle */}
        <button className="btn btn-primary">Use default template</button>
        <button
          className="btn btn-outline-primary d-flex align-items-center"
          style={{ gap: "8px" }}
        >
          <img src="eye-icon.svg" alt="eye-icon" />
          <span>Preview All</span>
        </button>
        <button
          className="btn btn-outline-primary d-flex align-items-center"
          style={{ gap: "8px" }}
        >
          <img src="save-icon.svg" alt="save-icon" />
          <span>Save</span>
        </button>
        <button
          className="btn btn-outline-primary d-flex align-items-center"
          style={{ gap: "8px" }}
        >
          <img src="reset-icon.svg" alt="reset-icon" />
          <span>Reset</span>
        </button>

        {/* Profile */}
        <div>
          <span>Super Cubex Billing</span>
          <img src="arrow-down.svg" alt="arrow-down" />
        </div>
        {/* End Profile Profile */}
      </div>
      {/* End Kanan */}
    </div>
  );
};

export default Navbar;

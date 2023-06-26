import React from "react";

const SidebarMenu = ({ children }) => {
  return (
    <div className="position-fixed page-sidebar" id="cubex-sidebar">
      <div className="mb-10">
        <input type="text" className="input w-100" placeholder="Search.." />
      </div>
      {children}
    </div>
  );
};

export default SidebarMenu;

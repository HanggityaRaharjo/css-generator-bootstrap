import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarNavItem = ({ image, name, to }) => {
  let url = window.location.pathname;
  let currentUrl = url.replace("/", "");
  let path = to.replace("/", "");
  const [currentPage, setCurrentPage] = useState(currentUrl);
  return currentPage == path ? (
    <NavActive image={image} name={name} to={to} />
  ) : (
    <NavItem image={image} name={name} to={to} />
  );
};

const NavActive = ({ image, name, to }) => {
  return (
    <Link to={to}>
      <div className="sidebar-nav-item active mb-10 text-light">
        <img src={image} />
        <p>{name}</p>
      </div>
    </Link>
  );
};

const NavItem = ({ image, name, to }) => {
  return (
    <Link to={to}>
      <div className="sidebar-nav-item mb-10 text-light">
        <img src={image} />
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default SidebarNavItem;

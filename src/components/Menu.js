import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <ul className="menu-panel">
        <NavLink to="/" className="menu-panel-item">
          Home
        </NavLink>

        <NavLink to="/about" className="menu-panel-item">
          About the Journal
        </NavLink>
        <NavLink to="editorial-stuff" className="menu-panel-item">
          Editorial Staff
        </NavLink>
        <NavLink to="pub-ethics" className="menu-panel-item">
          Journal Publication Ethics
        </NavLink>
        <NavLink to="requirements" className="menu-panel-item">
          Requirements
        </NavLink>
        <NavLink to="/archieve" className="menu-panel-item">
          Archive
        </NavLink>
        <NavLink to="/subscription" className="menu-panel-item">
          Subscription
        </NavLink>
        <NavLink to="/contacts" className="menu-panel-item">
          Contacts
        </NavLink>
        <NavLink to="/editors-column" className="menu-panel-item">
          Editor's Column
        </NavLink>
        <NavLink to="/partners" className="menu-panel-item">
          Partners
        </NavLink>
        <NavLink to="/announcements" className="menu-panel-item">
          Send Message
        </NavLink>
      </ul>
    </>
  );
}

export default Menu;

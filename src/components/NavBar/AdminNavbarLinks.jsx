import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, Dropdown } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Account
          </NavItem>
          <NavDropdown
            eventKey={2}
            title="Dropdown"
            id="basic-nav-dropdown-right"
          >
            <Dropdown.Items eventKey={2.1}>Action</Dropdown.Items>
            <Dropdown.Items eventKey={2.2}>Another action</Dropdown.Items>
            <Dropdown.Items eventKey={2.3}>Something</Dropdown.Items>
            <Dropdown.Items eventKey={2.4}>Another action</Dropdown.Items>
            <Dropdown.Items eventKey={2.5}>Something</Dropdown.Items>
            <Dropdown.Items divider />
            <Dropdown.Items eventKey={2.5}>Separated link</Dropdown.Items>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;

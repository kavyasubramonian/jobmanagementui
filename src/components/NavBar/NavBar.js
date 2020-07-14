import React from 'react';
import {Navbar,Nav, NavDropdown} from 'react-bootstrap';
import './NavBar.css';

const NavBar = () =>{
    return(
      <header>
        {/* <BrowserRouter> */}
        <Navbar collapseOnSelect expand="lg" bg="bd-dark" variant="dark">
        <Navbar.Brand href="/">Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/SignUp">Sign Up</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        {/* </BrowserRouter> */}
      </header>
      );
}

export default NavBar;


/*
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="mr-auto">
</Nav>
<Nav>
  {/* <Link href="Internships">Internships</Link>
  <Link href="#Sign Up or Log In">Sign Up or Log In</Link>
  <Link href="#Post a Job">Post a Job</Link> }
  <Link to="/SignUp">Sign Up{" "}</Link>
  <Link to="/login">Log In{" "}</Link>
  {/* <Switch>
  <Route path='/contact' render={() => <h1>Contact Us</h1>} />
</Switch> }
</Nav>
</Navbar.Collapse>
</Navbar> */
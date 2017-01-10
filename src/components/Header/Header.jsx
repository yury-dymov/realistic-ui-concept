import React from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import FailedNavItem from './NavItems/FailedNavItem';
import LoadingNavItem from './NavItems/LoadingNavItem';

function Header() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <span>Realistic UI</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav navbar>
          <LinkContainer to="/second-page">
            <NavItem eventKey={1}>Page Two</NavItem>
          </LinkContainer>
        </Nav>
        <Nav navbar pullRight>
          <LoadingNavItem />
          <FailedNavItem />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

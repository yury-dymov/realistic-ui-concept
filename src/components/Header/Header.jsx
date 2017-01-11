import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import FaGitHub from 'react-icons/lib/fa/github';
import FailedNavItem from './NavItems/FailedNavItem';
import LoadingNavItem from './NavItems/LoadingNavItem';

const propTypes = {
  page: PropTypes.number,
};

function Header({ page }) {
  return (
    <Navbar fixedTop>
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
          {page > 0 &&
            <LinkContainer to="/second-page">
              <NavItem eventKey={1}>Page Two</NavItem>
            </LinkContainer>
          }
        </Nav>
        <Nav navbar pullRight>
          <LoadingNavItem />
          <FailedNavItem />
          <NavItem href="https://github.com/yury-dymov/realistic-ui-concept">
            <FaGitHub size={22}/>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function mapStateToProps({ readme }) {
  return { page: readme.page || 0 };
}

export default connect(mapStateToProps)(Header);

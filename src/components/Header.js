import {Component} from "react";
import { Navbar, NavItem } from "react-bootstrap";


import { Link } from "react-router-dom";


export default  class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>iSherpa</Navbar.Brand>
        <NavItem>
          <Link to="/" className="nav-link">
            Home
          </Link>
          {this.props.user && (
            <Link to="/Profile" className="nav-link">
              Profile
            </Link>
          )}
        </NavItem>
      </Navbar>
    );
  }
}
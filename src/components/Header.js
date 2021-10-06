import {Component} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default  class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>
          <img
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            />
          <h1>iSherpa</h1>
        </Navbar.Brand>
            <Nav.Link as={Link} to="/Profile" href='/Profile'>Profile Page</Nav.Link>
        </Container>
      </Navbar>
    );
  }
}

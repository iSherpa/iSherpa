import { withAuth0 } from '@auth0/auth0-react';
import { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.css';
import Goat from '../images/100goat_hed.png';

class Header extends Component {
	render() {
		console.log(this.state);
		return (
			<Navbar class='main-navbar'>
				{/* <Container id='nav-container'> */}
				<Navbar.Brand class='title-container'>
					<img
						src={Goat}
						width='100'
						height='100'
						// className='d-inline-block align-top'
						alt='React Bootstrap logo'
					/>
					<h1>iSherpa</h1>
				</Navbar.Brand>
				<Nav.Link as={Link} to='/' href='/'>
					Park Finder
				</Nav.Link>
				<Nav.Link as={Link} to='/My-Trips' href='/My-Trips'>
					My Trips
				</Nav.Link>
				<Nav.Link as={Link} to='/About-Us' href='/About-Us'>
					About Us
				</Nav.Link>
				<Nav.Link as={Link} to='/Logout' href='/Logout'>
					Logout
				</Nav.Link>
				{/* </Container> */}
			</Navbar>
		);
	}
}
export default withAuth0(Header);

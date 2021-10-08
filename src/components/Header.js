import { withAuth0 } from '@auth0/auth0-react';
import { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {

	render() {
		console.log(this.state);
		return (
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand>
						<img
							src='/logo.svg'
							width='30'
							height='30'
							className='d-inline-block align-top'
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
				</Container>
			</Navbar>
		);
	}
}
export default withAuth0(Header);

import { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import LogoutButton from './buttons/LogoutButton';

class Logout extends Component {
	render() {
		return (
			<>
				<Card style={{ width: '20rem' }}>
					<Card.Body>
						<Card.Title>Profile Page</Card.Title>
						<Card.Title>User: {this.props.auth0.user.name}</Card.Title>
						<Card.Title>Email: {this.props.auth0.user.email}</Card.Title>
						<LogoutButton />
					</Card.Body>
				</Card>
			</>
		);
	}
}

export default withAuth0(Logout);

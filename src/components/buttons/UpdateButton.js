import { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
let server = `${process.env.REACT_APP_API}/my-parks/`;

class UpdateButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		};
	}

	handleShow = () => {
		this.setState({
			show: true,
		});
	};
	handleClose = () => {
		this.setState({
			show: false,
		});
	};

	handleUpdate = async (event) => {
		event.preventDefault();
		const id = this.props.parkData._id;
		const uriCall = `${server}:?id=${id}`;
		const updatedInfo = {
			contactsEmail: event.target.formEmail.value,
			contactsPhone: event.target.formPhone.value,
			notes: event.target.formNotes.value,
			images: event.target.formImage.value,
		};
		try {
			await axios.put(uriCall, updatedInfo);
		} catch (error) {
			console.log(error);
		}
		this.props.update();
	};

	render() {
		return (
			<>
				<Button onClick={this.handleShow} variant='warning'>
					Update
				</Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.parkData.fullName}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={this.handleUpdate}>
							<Form.Group className='mb-3' controlId='formEmail'>
								<Form.Label>Update Contacts Email</Form.Label>
								<Form.Control type='email' placeholder='name@example.com' />
							</Form.Group>
							<Form.Group className='mb-3' controlId='formPhone'>
								<Form.Label>Update Contacts Phonenumber</Form.Label>
								<Form.Control type='text' placeholder='1234567890' />
							</Form.Group>
							<Form.Group className='mb-3' controlId='formImage'>
								<Form.Label>Update Image</Form.Label>
								<Form.Control
									type='text'
									placeholder='http://localhost:3000/'
								/>
							</Form.Group>
							<Form.Group className='mb-3' controlId='formNotes'>
								<Form.Label>Enter Any Reminder Notes Here</Form.Label>
								<Form.Control as='textarea' rows={3} />
							</Form.Group>
							<Button
								variant='primary'
								type='submit'
								onClick={this.handleClose}
							>
								Save Changes
							</Button>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={this.handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}
export default withAuth0(UpdateButton);

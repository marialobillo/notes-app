import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const cookie_key = 'NOTES';

class App extends Component{
	constructor(){
		super();

		this.state = {
			text: '',
			notes: []
		}
	}
	componentDidMount(){
		this.setState({notes: read_cookie(cookie_key)});
	}


	submit(){
		const { notes } = this.state;
		const newNote = { text: this.state.text };

		notes.push(newNote);
		this.setState({ notes: notes });

		bake_cookie(cookie_key, this.state.notes);
	}
	clear(){
		delete_cookie(cookie_key);
		this.setState({notes: []});
	}
	render(){
		return (
			<div className="container">
				<h2>Note to Self</h2>
				<Form inline={true}>
					<FormControl onChange={event => this.setState({text: event.target.value})} />
					{' '}
					<Button bsStyle="info" onClick={() => this.submit()} >Submit</Button>
				</Form>
				{
					this.state.notes.map((note, index) => {
						return (
							<Note key={index} note={note} />
						)
					})
				}
				<hr />
				<Button bsStyle="danger" onClick={() => this.clear()}>Clear Notes</Button>
			</div>
		);
	}
}

export default App;

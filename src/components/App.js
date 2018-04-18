import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';


class App extends Component{
	constructor(){
		super();

		this.state = {
			text: '',
			notes: []
		}
	}

	submit(){
		const { notes } = this.state;

		const newNote = { text: this.state.text };

		notes.push(newNote);

		this.setState({ notes: notes });
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
							<div key={index}>{note.text}</div>
						)
					})
				}
			</div>
		);
	}
}

export default App;

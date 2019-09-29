import React, {Component} from 'react'

class AddTodoForm extends Component{
	state={
		content: ''
	}

	handleTextChange = e =>{
		this.setState({
			content: e.target.value
		})
	}

	handleSubmit = e =>{
		e.preventDefault();
		this.props.addTodo(this.state);

		this.setState({
			content:''
		})
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Add new todo:</label>
					<input type="text" onChange={this.handleTextChange} value={this.state.content}/>
				</form>
			</div>
		)
	}
}

export default AddTodoForm
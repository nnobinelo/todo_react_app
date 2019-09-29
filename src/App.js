import React, { Component } from 'react';
import Todos from './Todos'
import AddTodoForm from './AddTodoForm'

class App extends Component {
  state ={
    todos:[
      {id:1, content: 'buy some milk'},
      {id:2, content: 'play video games'}
    ]
  }

  deleteTodo = id =>{
    let todos = this.state.todos.filter(todo=>{
      return todo.id !== id   // !==, and == also checks type of variable not just value like = or !=
    })

    //only need to enter "todos" instead of "todos: todos" because the key (todos) and value (todos)
    //have the same name
    this.setState({
      todos
    })
  }

  addTodo = todo =>{
    todo.id = Math.random()

    let todos = [...this.state.todos,todo]
    
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo}/>
        <AddTodoForm addTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default App;
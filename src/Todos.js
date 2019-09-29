import React from 'react'

const Todos = ({todos,deleteTodo}) =>{
	const todosList = todos.length ? todos.map(todo=>{		//specifying a unique keyfor each item  
		return(																							//is necessary when using the map function 
			<div className="collection-item" key={todo.id}>
				{/*since the deleteTodo function takes in parameters which require parethesis you have to
				wrap the function in an anonymous arrow functuion so that it doesn't automatically invoke
				the function*/}
				<span onClick={ () => {deleteTodo(todo.id)} }>{todo.content}</span> 
			</div>
		)
	}):( //parenthesis surrounding msg below are not necessary just makes code easier to read maybe?
		<p className="center">You have nothing else todo!!!! :)</p>
	)

	return(
		<div className="todos collection">
			{todosList}
		</div>
	)
}

export default Todos
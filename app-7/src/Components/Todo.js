import React from 'react'

const Todo = props => <li onClick={() => props.handleDelete(props.index)}>{props.task}</li>

export default Todo;
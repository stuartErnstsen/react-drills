import React from 'react';

const Todo = props => {
    return props.task ? <li onClick={() => props.removeTask(props.index)}>{props.task}</li> : ''
}

export default Todo;
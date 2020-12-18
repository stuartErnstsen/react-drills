import React from 'react';
import Todo from './Todo'

const List = props => <ol> {props.taskArr.map((task, i) => <Todo key={i} index={i} task={task} handleDelete={props.handleDelete} />)} </ol>

export default List;
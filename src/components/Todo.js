import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../Action';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Todo.css"

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    dispatch(updateTodo({ ...todo, text }));
    setEditable(false);
    axios.put(`http://localhost:8000/todos/${todo.id}`, { text });
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    axios.delete(`http://localhost:8000/todos/${todo.id}`);
  };

  return (
    <div className='todo-list'>
      {editable ? (
        <>
          <TextField
            type="text"
            size='small'
            value={text}
            onChange={(e) => setText(e.target.value)}
            className='list-inp'
          />
          <Button onClick={handleUpdate} className='btn1'>Update</Button>
        </>
      ) : (
        <>
          <span className='list-inp'>{todo.text}</span>
          <Button onClick={() => setEditable(true)} className='btn1'>Edit</Button>
        </>
      )}
      <Button onClick={handleDelete} className='btn1'>Delete</Button>
    </div>
  );
};

export default Todo;

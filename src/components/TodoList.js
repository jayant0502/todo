import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../Action';
import axios from 'axios';
import Todo from './Todo';
import "./TodoList.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState('');



useEffect(() => {
    fetchData();
  }, [dispatch]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/todos');
      dispatch({ type: 'ADD_TODO', payload: response.data.map((item=>(item.id))) });
      console.log(response)
    } catch (error) {
      console.error("Error fetching todos from server:", error);
    }
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const todo = { text: newTodo, id: Date.now() };
      dispatch(addTodo(todo));
      axios.post('http://localhost:8000/todos', todo);
      setNewTodo('');
    }
  };

  return (
    <div className='todo-wrapper'>
      
       <TextField id="outlined-basic" placeholder='Create Your New Todo' variant="outlined"  type="text"
        value={newTodo}
        size='small'
        onChange={(e) => setNewTodo(e.target.value)}
        className='todo-inp' />
      <Button variant="contained" onClick={handleAddTodo} className='btn'>Add Todo</Button>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;

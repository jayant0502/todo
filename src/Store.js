import { createStore } from 'redux';
import TodoReducer from './TodoReducer';

const store = createStore(TodoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

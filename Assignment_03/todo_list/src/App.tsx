import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your custom CSS if needed

const App: React.FC = () => {
  // Define the type for a Todo item
  interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }

  // State for the list of todos and the current input value
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [editId, setEditId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>('');

  // Handle adding a new todo
  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  // Handle toggling the completion status of a todo
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Handle deleting a todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Handle setting up edit mode for a todo
  const editTodo = (id: number, text: string) => {
    setEditId(id);
    setEditValue(text);
  };

  // Handle saving the edited todo
  const saveTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: editValue } : todo
      )
    );
    setEditId(null);
    setEditValue('');
  };

  // Handle deleting all todos
  const deleteAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={addTodo}>Add Todo</button>
        </div>
      </div>
      <ul className="list-group">
        {todos.map(todo => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  className="form-control mr-2"
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                />
                <button className="btn btn-success btn-sm" onClick={() => saveTodo(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <span
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.text}
                </span>
                <div>
                  <button className="btn btn-warning btn-sm mr-2" onClick={() => editTodo(todo.id, todo.text)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      {todos.length > 0 && (
        <button className="btn btn-danger btn-block mt-3" onClick={deleteAllTodos}>
          Delete All
        </button>
      )}
    </div>
  );
};

export default App;

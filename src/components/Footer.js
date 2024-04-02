import React, {useState} from 'react'

function Footer() {
// State to store list of todos, each todo is an object
const [todos, setTodos] = useState([]);
// State to store current value of input field
const [input, setInput] = useState('')
 
// Function to add new todo on list
const addTodo = () => {
  setTodos([...todos, {text: input, completed: false}]);
  setInput('') // Clear input after adding
}

// Function to delete todo based on index, indexToDelete is paramater that specifies index deleted
const deleteTodo = (indexToDelete) => {
  setTodos(todos.filter((_, index) => index !== indexToDelete))
}

// Function to toggle completion status of todo
const toggleComplete = (indexToToggle) => {
  const newTodos = todos.map((todo, index) =>
    index === indexToToggle ? { ...todo, completed: !todo.completed } : todo
  )
  setTodos(newTodos)
}

  return (
    <div>
      <input 
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo} disabled={input === ''}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
        <li key={index} style={{ textDecoration: todo.completed ? 'line-through': 'none' }}>
          {todo.text} <br></br>
          <button className='mr-2' onClick={() => toggleComplete(index)}>
            {todo.completed ? 'Unmark' : 'Mark'}
          </button>
          <button onClick={() => deleteTodo(index)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
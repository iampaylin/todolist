import { useState } from 'react'
import './App.css'

// This component renders a todo list, with task name, completion state and uses the ID as key
type Todo = {
  id: number
  name: string
  completed: boolean
}

function App() {

  const [todoList, setTodoList] = useState<Todo[]>([

  ])

  /**
   * Adds a new todo item to the todo list.
   *
   * @param {React.FormEvent} event - The form event triggered by submitting the form.
   * @return {void} This function does not return a value.
   */
  const addTodo = (event: React.FormEvent) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      todo: { value: string }
    }
    const name = target.todo.value
    setTodoList([...todoList, { id: todoList.length + 1, name, completed: false }])
    target.todo.value = ''
  }


  /**
   * Toggles the completion status of a todo item with the given ID.
   *
   * @param {number} id - The ID of the todo item to toggle.
   * @return {void} This function does not return a value.
   */
  const toggleCompeted = (id: number) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    )
  }

  /**
   * Deletes an item from the todo list based on its ID.
   *
   * @param {number} id - The ID of the item to be deleted.
   * @return {void} This function does not return a value.
   */
  const deleteItem = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <div className="App">
        <h1>Todo List</h1>

        <div>
          <form onSubmit={addTodo}>
            <input type="text" name="todo" />
            <button type="submit" className='add'>Add</button>
          </form>

        </div>
      </div>

      {todoList.map((todo) => (
        <div key={todo.id} className='item'>
          <input type="checkbox" checked={todo.completed} onChange={() => {
            toggleCompeted(todo.id)
          }} />
          <span className={todo.completed ? 'completed' : ''}>{todo.name}</span>
          <button className='delete' onClick={() => deleteItem(todo.id)}>Delete</button>
        </div>
      ))}

      <div className="links">
        <a href="https://www.linkedin.com/in/paylin/" target="_blank" className='links-link'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" width={40} />
        </a>
        <a href="https://github.com/iampaylin" target="_blank" className='links-link'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width={40}/>
        </a>
      </div>

      <p> <strong>Made with React.JS, Typescript and Codeium</strong> </p>
    </>

  )
}

export default App

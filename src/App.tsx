import { FC, useEffect, useRef, useState } from 'react'
import { ITodo } from './types/data'
import TodoList from './components/todoList'
const App: FC = () => {
  const [todo, setTodo] = useState('')
  const [arrayTodo, setArrayTodo] = useState<ITodo[]>([])

  const addTodo = () => {
    if (todo.trim().length > 0) {
      setArrayTodo([
        ...arrayTodo,
        {
          id: Date.now(),
          title: todo,
          status: false,
        },
      ])
      setTodo('')
    }
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const removeTodo = (id: number): void => {
    setArrayTodo(arrayTodo.filter((todo) => todo.id !== id))
  }

  const editTask = (id: number) => {
    const newTitle: any = prompt('new title')
    let newArray = arrayTodo.map((item) => {
      if (item.id === id) {
        item.title = newTitle
      }
      return item
    })
    setArrayTodo(newArray)
  }

  const toggleCheckBox = (id: number): void => {
    setArrayTodo(
      arrayTodo.map((item) => {
        if (item.id === id)
          return {
            ...item,
            status: !item.status,
          }
        return item
      }),
    )
  
  }
 
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div>
      <div style={{marginBottom:20}}>
        <input
        style={{width:230}}
          value={todo}
          ref={inputRef}
          onKeyDown={handleKeyDown}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
        />
        <button style={{marginLeft:20}} onClick={addTodo}>add</button>
      </div>
      <TodoList
        toggleCheckBox={toggleCheckBox}
        editTask={editTask}
        items={arrayTodo}
        removeTodo={removeTodo}
      />
    </div>
  )
}

export default App

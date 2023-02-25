import React, { FC } from 'react'
import { ITodo } from '../types/data'
import TodoItem from './todoItem'
interface ITodoListProps {
  items: ITodo[]
  removeTodo: (id: number) => void
  editTask: (id: number) => void
  toggleCheckBox: (id: number) => void
}

const TodoList: FC<ITodoListProps> = (props) => {
  const { editTask, removeTodo, toggleCheckBox } = props
  return (
    <>
      {props.items.map((data) => (
        <TodoItem
          toggleCheckBox={toggleCheckBox}
          editTask={editTask}
          removeTodo={removeTodo}
          key={data.id}
          {...data}
        />
      ))}
    </>
  )
}

export default TodoList

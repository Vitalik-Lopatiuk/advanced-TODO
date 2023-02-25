import { FC } from 'react'
import { ITodo } from '../types/data'

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void
  editTask: (id: number) => void
  toggleCheckBox:(id:number) => void
}
const TodoItem: FC<ITodoItem> = (props) => {
  const { title, id, status, removeTodo, editTask ,toggleCheckBox } = props

  return (
    <div style={{display:'flex',}}>
     
      <input type="checkbox"  checked={status} onChange ={() => toggleCheckBox(id)} />
       {status ?  <p  style={{textDecorationLine:'line-through' , marginLeft:10} }>{title}</p>  :  <p  style={{marginLeft:10,} }>{title}</p> }      

      <button style={{marginLeft:10}} onClick={() => removeTodo(id)}>X</button>
      <button style={{marginLeft:10}} onClick={() => editTask(id)}>Change</button>
    </div>
  )
}

export default TodoItem

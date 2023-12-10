import React from 'react'
import "./styles.css"

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;

} 

const InfutField = ({todo, setTodo} : Props) => {

  return (
    <form className='input'>
        <input type='input' placeholder='Enter a Task' className='input__box'
         
         value={todo} onChange={(e) => setTodo(e.target.value)}
        />
        <button className='input_submit'>Go</button>
    </form>
  )
}

export default InfutField

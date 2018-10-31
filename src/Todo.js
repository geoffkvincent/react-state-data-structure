import React from 'react'

const styles = {
  todo: {cursor: 'pointer'},
  complete: {color: 'grey', textDecoration: 'line-through'}
}


const Todo = ({name, id, complete, todoClick, todoEdit }) => (
  <li
    style= {complete ? {...styles.todo, ...styles.complete} : styles.todo}
    onClick={() => todoClick(id)}
    
  >
    {name}
    <button onClick={() => todoEdit(id)} >
      Edit
    </button>
  </li>
)

export default Todo
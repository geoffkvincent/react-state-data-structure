import React from 'react'

const List = ({todos}) => (
  <ul>
    { todos.map(todo => 
        <li key={todo.id}>
          {todo.name}
        </li>
      )
    }
  </ul>      
)

export default List
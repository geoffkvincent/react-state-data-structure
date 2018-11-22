import React from 'react'

const List = ({todos}) => (
  <div>
    { todos.map(todo => 
        <li key={todo.id}>
          {todo.content}
        </li>
      )
    }
  </div>        
)

export default List
import React from 'react'

const List = ({todos}) => (
  <div>
    {todos.map(todo => 
      <li>{todo.content}</li>
    )}
  </div>        
)

export default List
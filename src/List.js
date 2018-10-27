import React from 'react'
import Todo from './Todo'

const List = ({todos, todoClick}) => (
  <div>
    <ul>
      {todos.map(t =>
        <Todo key={t.id}
          {...t}
          todoClick={todoClick}
        />
        )}    
    </ul>
  </div>
)

export default List
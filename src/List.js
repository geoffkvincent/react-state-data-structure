import React from 'react'
import Todo from './Todo'

const List = ({todos, listName, todoClick}) => (
  <div>
    <h1>{listName}</h1>
    <ul>
      { todos.map(t =>
          <Todo 
            key={t.id}
            {...t}
            todoClick={todoClick}
          />
        )
      }
    </ul>
  </div>
)

export default List
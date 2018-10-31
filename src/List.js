import React from 'react'
import Todo from './Todo'

const List = ({todos, listName, todoClick, todoEdit}) => (
  <div>
    <h1>{listName}</h1>
    <ul>
      { todos.map(t =>
          <Todo 
            key={t.id}
            {...t}
            todoClick={todoClick}
            todoEdit={todoEdit}
          />
        )
      }
    </ul>
  </div>
)

export default List
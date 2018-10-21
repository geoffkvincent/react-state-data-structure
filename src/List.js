import React from 'react'
import Todo from './Todo'

const List = ({todos, listName}) => (
  <div>
    <h1>{listName}</h1>
    <ul>
      {todos.map(t => <Todo key={t.id} {...t} />)}
    </ul>
  </div>
)

export default List

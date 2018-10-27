import React from 'react'
import Todo from './Todo'

const List = ({todos}) => (
  <div>
    <ul>
      {todos.map(t =>
        <Todo key={t.id}
          {...t}
        />
        )}    
    </ul>
  </div>
)

export default List
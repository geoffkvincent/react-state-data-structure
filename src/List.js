import React from 'react'

const List = ({todos}) => (
  <div>
    <ul>
      {todos.map(t =>
        <li key={t.id}>{t.content}</li>  
      )} 
    </ul>
  </div>
)

export default List
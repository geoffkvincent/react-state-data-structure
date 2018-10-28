import React from 'react'

const List = ({todos}) => {
  <div>
    {todos.map(t =>
      <li key={t.id}>{t.content}</li>  
    )} 
  </div>
}

export default List
import React from 'react'

const List = ({todos, listName}) => (
  <div>
    <h1>{listName}</h1>
    <ul>
      { todos.map(t =>
          <li key={t.id}>
            {t.content}
          </li>
        )
      }
    </ul>
  </div>
)

export default List
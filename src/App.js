import React from 'react'
import initialData from './InitialData'

class App extends React.Component {
  state = initialData

  render(){
    return (
      <div>
        <ul>
          {this.state.todos.map(todo => 
            <li>{todo.content}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default App
import React from 'react'
import InitialData from './InitialData'
import List from './List'

class App extends React.Component {
  state= InitialData
  render() {
    const{todos} =this.state
    return (
      <div>
        <ul>
          {todos.map(t =>
            <li key={t.id}>{t.content}</li>         
          )}   
        </ul>
      </div>
    )
  }
}

export default App
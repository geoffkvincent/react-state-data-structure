import React from 'react'
import initialData from './InitialData'
import List from './List'

class App extends React.Component {
  state = initialData

  render(){
    const {todos} = this.state
    return (
      <ul>
        <List todos = {todos}/>
      </ul>
    )
  }
}

export default App
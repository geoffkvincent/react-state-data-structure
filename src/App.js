import React from 'react'
import InitialState from './InitialState'
import List from './List'

class App extends React.Component {
  state = InitialState
  
  render() {
    const {todos} = this.state
    return (
      <div>
        <List todos={todos}/>
      </div>
    )
  }
}

export default App
import React from 'react'
import initialState from './InitialState'
import List from './List'

class App extends React.Component {
  state = initialState
  
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
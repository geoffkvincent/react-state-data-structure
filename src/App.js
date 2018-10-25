import React from 'react'
import InitialData from './InitialData'
import List from './List'

class App extends React.Component {
  state = InitialData

  render() {
    const {todos} = this.state
    return(
      <div>
        <List todos={todos} />
      </div>
    )
  }
}

export default App
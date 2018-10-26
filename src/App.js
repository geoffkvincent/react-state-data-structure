import React from 'react'
import InitialState from './InitialState'

class App extends React.Component {
  state = InitialState
  
  render() {
    return (
      <div>
        <List />
      </div>
    )
  }
}

export default App
import React from 'react'
import InitialData from './InitialData'

class App extends React.Component {
  state= InitialData
  render() {
    const{todos} =this.state
    return (
      <div>

      </div>
    )
  }
}

export default App
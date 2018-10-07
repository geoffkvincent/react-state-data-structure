import React from 'react'
import initialData from './InitialData'

class App extends React.Component {
  state = initialData
  
  render() {
    return (
    <div>
      {this.state.todos
    </div>
    )
  }
}

export default App
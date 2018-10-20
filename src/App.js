import React from 'react'
import initialData from './InitialData'
import List from './List'

class App extends React.Component {
  state = initialData
  
  render() {
    return (
      <>
        <List todos={this.state.todos}/>
      </>
    )
  }
}

export default App
import React from 'react'
import InitialData from './InitialData'
import List from './List'
import Form from './Form'

class App extends React.Component {
  state = InitialData

  render() {
    const {todos} = this.state
    return(
      <div>
        <Form />
        <List todos={todos} />
      </div>
    )
  }
}

export default App
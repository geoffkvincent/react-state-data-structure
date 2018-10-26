import React from 'react'
import List from './List'
import Form from './Form'

class App extends React.Component {
  state = {todos: []}

  getId = (name) => {
    Math.floor(1 + Map.random())
  }

  addItem = () => {
    
  }
  
  render() {
    const {todos} = this.state
    return (
      <div>
        <Form />
        <List todos={todos}/>
      </div>
    )
  }
}

export default App
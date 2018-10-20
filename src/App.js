import React from 'react'
import List from './List'
import Form from './Form'

class App extends React.Component {
  state = {todos: [] }

  addItem = () => {
  
  }
  
  render() {
    const {todos} = this.state
    return (
      <>
        <Form />
        <List listName= 'Todo List' todos={todos}/>
      </>
    )
  }
}

export default App
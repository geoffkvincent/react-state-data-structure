import React from 'react'
import List from './List'
import Form from './Form'

class App extends React.Component {
  state = {todos: [] }

  getUniqId = () => {
    return Math.floor(( 1 + Math.random()) * 0x10000)
    
  }

  addItem = (item) => {
    const { todos } = this.state
    const todo = { item, id: this.getUniqId(), complete: false}
    this.setState({todos:[todo, ...todos] })
  }
  
  render() {
    const {todos} = this.state
    return (
      <>
        <Form addItem={this.addItem}/>
        <List listName= 'Todo List' todos={todos}/>
      </>
    )
  }
}

export default App
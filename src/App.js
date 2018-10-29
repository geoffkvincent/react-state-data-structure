import React from 'react'
import List from './List'
import Form from './Form'

class App extends React.Component {
  state= { todos: [] }

  addItem = (name) => {
    const {todos} = this.state
    const id = Math.floor((1 + Math.random()) * 0x10000)
    const todo = {name, id, complete: false}
    this.setState({ todos: [todo, ...todos]})
  }

  render() {
    const{todos} = this.state
    return(
      <div>
        <Form addItem={this.addItem}/>
        <List listName="Todo List" todos={todos}/>
      </div>
    )
  }
}

export default App
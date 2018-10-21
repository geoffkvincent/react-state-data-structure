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

  handleClick = (id) => {
    const {todos} = this.state
    this.setState({
      todos: todos.map( todo => {
        if(todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo
      })
    })
  }
  
  render() {
    const {todos} = this.state
    return (
      <>
        <Form addItem={this.addItem}/>
        <List listName= 'Todo List' todos={todos} todoClick={this.handleClick}/>
      </>
    )
  }
}

export default App
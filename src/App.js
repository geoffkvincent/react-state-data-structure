import React from 'react'
import List from './List'
import Form from './Form'
import Footer from './Footer'

class App extends React.Component {
  state = {todos: [], filter: 'All' }

  setFilter = (filter) => {
    this.setState({ filter })   
  }

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

  visibleItems = () => {
    const {todos, filter } = this.state
    switch(filter) {
      case 'Active':
        return todos.filter( t => !t.complete)
      case 'Complete':
        return todos.filter( t => t.complete)
      default:
        return todos
    }
  }
  
  render() {
    const {todos, filter} = this.state
    return (
      <>
        <Form addItem={this.addItem}/>
        <List listName= 'Todo List' todos={this.visibleItems()} todoClick={this.handleClick}/>
        <Footer filter={filter} setFilter={this.setfilter}/>
      </>
    )
  }
}

export default App
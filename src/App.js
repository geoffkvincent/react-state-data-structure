import React from 'react'
import List from './List'
import Form from './Form'
import Footer from './Footer'

class App extends React.Component {
  state= { todos: [], view: 'All' }

  setFilter = (view) => {
    this.setState({view})
  }

  addItem = (name) => {
    const {todos} = this.state
    const id = Math.floor((1 + Math.random()) * 0x10000)
    const todo = {name, id, complete: false}
    this.setState({ todos: [todo, ...todos]})
  }

  handleClick = (id) => {
    const {todos} = this.state
    this.setState({ 
      todos: todos.map( todo => {
        if (todo.id === id) {
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
    const{todos, view} = this.state
    return(
      <div>
        <Form addItem={this.addItem}/>
        <List listName="Todo List" todos={todos} todoClick={this.handleClick}/>
        <Footer view={view} setFilter={this.setFilter}/>
      </div>
    )
  }
}

export default App
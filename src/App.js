import React from 'react'
import List from './List'
import Form from './Form'

class App extends React.Component {
  state = {todos: []}

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
  }

  addItem = (name) => {
    const {todos} = this.state
    const todo = {name, id: this.getId(), complete: false}
    this.setState({todos : [todo, ...todos]})
  }
  
  render() {
    const {todos} = this.state
    return (
      <div>
        <Form addItem={this.addItem}/>
        <List todos={todos}/>
      </div>
    )
  }
}

export default App
import React from 'react'
import List from './List'
import Form from './Form'

class App extends React.Component {
  state= { todos: [] }

  render() {
    const{todos} = this.state
    return(
      <div>
        <Form />
        <List listName="Todo List" todos={todos}/>
      </div>
    )
  }
}

export default App
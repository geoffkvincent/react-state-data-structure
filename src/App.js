import React from 'react'
import initialData from './InitialData'
import List from './List'
import Form from './Form'

class App extends React.Component {
  state = initialData
  
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
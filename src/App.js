import React from 'react'
import initialData from './InitialData'
import List from './List'
import Form from './Form'

class App extends React.Component {
  state = initialData
  
  render() {
    return (
      <>
        <List listName= 'Todo List' todos={this.state.todos}/>
      </>
    )
  }
}

export default App
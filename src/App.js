import React from 'react'
import initialData from './InitialData'
import List from './List'

class App extends React.Component {
  state= initialData

  render() {
    const{todos} = this.state
    return(
      <div>
        <List listName="Todo List" todos={todos}/>
      </div>
    )
  }
}

export default App
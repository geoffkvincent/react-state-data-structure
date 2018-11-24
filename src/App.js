import React from 'react'
import initialData from './InitialData'
import List from './List'
import Form from './Form'

class App extends React.Component {
  state = initialData

  getId = () => {
    
  }

  addItems = () => {
  
  }

  render(){
    const {todos} = this.state
    return (
      <div>
        <Form addItems= {this.addItems}/>
        <List todos = {todos}/>
      </div>
    )
  }
}

export default App
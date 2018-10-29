import React from 'react'
import initialData from './InitialData'

class App extends React.Component {
  state= initialData

  render() {
    const{todos} = this.state
    return(
      <div>
        <ul>
          {todos.map( t => 
            <li >{t.content}</li>   
          )}
        </ul>
      </div>
    )
  }
}

export default App
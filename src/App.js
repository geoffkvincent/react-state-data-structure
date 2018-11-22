import React from 'react'
import initialData from './InitialData'
import List from './List'

class App extends React.Component {
  state = initialData

  render(){
    return (
      <ul>
        <List />
      </ul>
    )
  }
}

export default App
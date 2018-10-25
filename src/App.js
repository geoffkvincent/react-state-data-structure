import React from 'react'
import initialData from './initialData'
import List from './List'

class App extends React.Component {
  state = initialData

  render() {
    return(
      <div>
        <List />
      </div>
    )
  }
}

export default App
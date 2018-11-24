import React from 'react'

class Form extends React.Component {
  state = { name: ''}

  render() {
    const {name} = this.state
    return(
      <form>
        <input 
          value = {name}
          required
          placeholder = 'Item'
        />
      </form>
    )
  }
}

export default Form
import React from 'react'

class Form extends React.Component {
  state = {name: ''}

  render() {
    const {name} = this.state
    return(
      <form>
        <input 
          value= {name}
          name= 'name'
          required
          placeholder= 'add item'
        />
      </form>
    )
  }
}

export default Form
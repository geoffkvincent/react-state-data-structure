import React from 'react'

class Form extends React.Component {
  state={name: ''}

  render() {
    const {name} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={name}
          name="name"
          onChange={this.handleChange}
          required
          placeholder="add item"
        />
      </form>
    )
  }
}

export default Form
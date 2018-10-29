import React from 'react'

class Form extends React.Component {
  state={ name: '' }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    const {name} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={name}
          onChange={this.handleChange}
          required
          placeholder="add item"
        />
      </form>
    )
  }
}

export default Form
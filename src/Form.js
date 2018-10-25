import React from 'react'

class Form extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }


  render() {
    const {name} = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          value={name}
          name="name"
          required
          placeholder="add item"
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default Form
import React from 'react'

class Form extends React.Component {
  state = { item: '' }

  handleChange = (e) => {
    this.setState({ item: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const {item} = this.state
    return (
      <form>
        <input
          value={item}
          item = 'item'
          required
          placeholder= 'Add Item'
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default Form
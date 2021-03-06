import React from 'react'

class Form extends React.Component {
  state = { name: ''}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItems(this.state.name)
    this.setState({name: ''})
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    const {name} = this.state
    return(
      <form onSubmit = {this.handleSubmit}>
        <input 
          value = {name}
          name = 'name'
          onChange = {this.handleChange}
          required
          placeholder = 'Item'
        />
      </form>
    )
  }
}

export default Form
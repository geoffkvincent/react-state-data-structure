import React from 'react'

class Form extends React.Component {
  state = { item: [] }

  handleSubmit = () => {
    preventDefault()
  }

  render() {
    return (
      <form>
        <input
          required
          placeholder= 'Add Item'
          onChange
        />
      </form>
    )
  }
}

export default Form
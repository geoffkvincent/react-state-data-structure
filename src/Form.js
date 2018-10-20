import React from 'react'

class Form extends React.Component {
  state = { item: [] }
  render() {
    return (
      <form>
        <input
          required
          placeholder= 'Add Item'
        />
      </form>
    )
  }
}

export default Form
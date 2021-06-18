import React, { Component } from 'react'

class AddPhoto extends Component {
  constructor(props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const imageLink = e.target.elements.link.value
    const description = e.target.elements.description.value
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
    }
    if (description && imageLink) {
      this.props.onAddPhoto(post)
    }
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <h1>Photowall</h1>
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='link' name='link' />
            <input type='text' placeholder='description' name='description' />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddPhoto

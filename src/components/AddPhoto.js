import React from 'react'

const AddPhoto = ({ onAddPhoto }) => {
  function handleSubmit(event) {
    event.preventDefault()
    const imageLink = event.target.elements.link.value
    const description = event.target.elements.description.value
    const post = {
      id: 0,
      description: description,
      imageLink: imageLink,
    }
    if (imageLink && description) {
      onAddPhoto(post)
    }
  }
  return (
    <div>
      <h1>PhotoWall</h1>
      <div className='container'>
        <form onSubmit={handleSubmit} className='form' action=''>
          <input type='text' placeholder='Link' name='link' />
          <input type='text' placeholder='Description' name='description' />
          <button>Post</button>
        </form>
      </div>
    </div>
  )
}

export default AddPhoto

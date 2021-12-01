import React from 'react'

const Photo = ({ post }) => {
  return (
    <figure className='figure'>
      <img className='photo' src={post.imageLink} alt={post.description} />
      <figcaption>
        <p>{post.description}</p>
        <div className='button-container'>
          <button
            className='remove-button'
            onClick={() => {
              post.onRemovePhoto(post)
            }}>
            Remove
          </button>
        </div>
      </figcaption>
    </figure>
  )
}

export default Photo

import React from 'react'

const Photo = ({ post, onRemovePhoto }) => {
  return (
    <figure className='figure'>
      <img className='photo' src={post.imageLink} alt={post.description} />
      <figcaption>
        <p>{post.description}</p>
        <div className='button-container'>
          <button
            onClick={() => {
              onRemovePhoto(post)
            }}>
            Remove
          </button>
        </div>
      </figcaption>
    </figure>
  )
}

export default Photo

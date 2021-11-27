import React from 'react'

const Photo = (props) => {
  const post = props.post
  return (
    <figure className='figure'>
      <img class='photo' src={post.imageLink} alt={post.description} />
      <figureCaption>
        <p>{post.description}</p>
        <div className='button-container'>
          <button
            class='remove-button'
            onClick={() => {
              props.onRemovePhoto(post)
            }}>
            Remove
          </button>
        </div>
      </figureCaption>
    </figure>
  )
}

export default Photo

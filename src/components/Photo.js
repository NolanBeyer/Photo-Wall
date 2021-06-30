import React from 'react'
import { connect } from 'react-redux'

const Photo = (props) => {
  const post = props.post
  return (
    <figure className='figure'>
      <img className='photo' src={post.imageLink} alt={post.description} />
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className='button-container'>
        <button
          onClick={() => {
            props.onRemovePhoto(post)
          }}>
          Remove
        </button>
      </div>
    </figure>
  )
}
function mapStateToProps(state) {
  return {
    posts: state,
  }
}

export default connect(mapStateToProps)(Photo)

import React from 'react'
import Photo from './Photo'

const PhotoWall = ({ posts, onRemovePhoto }) => {
  return (
    <div className='photo-grid'>
      {posts.map((post, index) => (
        <Photo key={index} post={post} onRemovePhoto={onRemovePhoto} />
      ))}
    </div>
  )
}

export default PhotoWall

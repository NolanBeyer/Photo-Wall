import React from 'react'
import Photo from './Photo'

const PhotoWall = ({ posts }) => {
  return (
    <div className='photo-grid'>
      {posts.map((post, index) => (
        <Photo key={index} post={post} />
      ))}
    </div>
  )
}

export default PhotoWall

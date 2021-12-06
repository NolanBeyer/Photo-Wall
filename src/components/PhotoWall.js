import React from 'react'
import Photo from './Photo'
import { Link } from 'react-router-dom'

const PhotoWall = ({ posts, onRemovePhoto }) => {
  return (
    <div>
      <Link className='add-icon' to={'/AddPhoto'}></Link>
      <div className='photo-grid'>
        {posts
          .sort(function (x, y) {
            return y.id - x.id
          })
          .map((post, index) => (
            <Photo key={index} post={post} onRemovePhoto={onRemovePhoto} />
          ))}
      </div>
    </div>
  )
}

export default PhotoWall

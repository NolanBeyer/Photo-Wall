import React from 'react'
import Photo from './Photo'
import { Link } from 'react-router-dom'

const PhotoWall = ({ posts, onRemovePhoto, onNavigate }) => {
  return (
    <div>
      <Link className='add-icon' onClick={onNavigate} to='/addPhoto'></Link>
      {/* <button onClick={onNavigate} className='add-icon'></button> */}
      <div className='photo-grid'>
        {posts
          .sort(function (x, y) {
            return y.id - x.id
          })
          .map((post, id) => (
            <Photo key={id} post={post} onRemovePhoto={onRemovePhoto} />
          ))}
      </div>
    </div>
  )
}

export default PhotoWall

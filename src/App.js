import React, { useState } from 'react'
import Title from './components/Title'
import PhotoWall from './components/PhotoWall'
import AddPhoto from './components/AddPhoto'
import { Route } from 'react-router-dom'
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: '0',
      description: 'beautiful landscape',
      imageLink:
        'https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg' +
        '3919321_1443393332_n.jpg',
    },
    {
      id: '1',
      description: 'Aliens???',
      imageLink: 'https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg',
    },
    {
      id: '2',
      description: 'On a vacation!',
      imageLink:
        'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg',
    },
  ])

  function removePhoto(p) {
    setPosts(posts.filter((post) => post !== p))
  }

  function addPhoto(postSubmitted) {
    setPosts(posts.concat(postSubmitted))
  }

  return (
    <div>
      <Route
        exact
        path='/'
        render={() => (
          <div>
            <Title title={'Photowall'} />
            <PhotoWall posts={posts} onRemovePhoto={removePhoto} />
          </div>
        )}
      />

      <Route
        path='/AddPhoto'
        render={({ history }) => (
          <div>
            <AddPhoto
              onAddPhoto={(addedPost) => {
                addPhoto(addedPost)
                history.push('/')
              }}
            />
          </div>
        )}
      />
    </div>
  )
}

export default App

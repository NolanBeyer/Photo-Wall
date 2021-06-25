import React, { Component } from 'react'
import './App.css'
import Title from './components/Title'
import PhotoWall from './components/PhotoWall'
import AddPhoto from './components/AddPhoto'
import { Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Route
          exact
          path='/'
          render={() => (
            <div>
              <Title title={'PhotoWall'} />
              {/* <PhotoWall
                posts={posts}
                onRemovePhoto={this.removePhoto}
                onNavigate={navigate}
              /> */}
            </div>
          )}
        />

        {/* <Route
          path='/addPhoto'
          render={({ history }) => (
            <AddPhoto
              onAddPhoto={(addedPost) => {
                this.addPhoto(addedPost)
                history.push('/')
              }}
            />
          )}
        /> */}
      </div>
    )
  }
}

export default App

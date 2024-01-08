import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'

import './App.css'

const darkTheme = localStorage.getItem('darkmode') === 'false'

class App extends Component {
  state = {
    isDarkTheme: darkTheme,
    savedVideosList: [],
    save: false,
  }

  addVideosToSavedVideos = videoDetails => {
    this.setState(prev => ({
      savedVideosList: [...prev.savedVideosList, videoDetails],
    }))
  }

  deleteVideosFromSavedVideos = videoDetails => {
    const {savedVideosList} = this.state
    const updatedList = savedVideosList.filter(
      each => each.id !== videoDetails.id,
    )
    this.setState({savedVideosList: updatedList})
  }

  updateSaveVideosList = videoDetails => {
    const {save} = this.state
    if (save) {
      this.deleteVideosFromSavedVideos(videoDetails)
    } else {
      this.addVideosToSavedVideos(videoDetails)
    }
  }

  updateSave = videoDetails => {
    this.setState(
      prev => ({save: !prev.save}),
      this.updateSaveVideosList(videoDetails),
    )
  }

  changeTheme = () => {
    const {isDarkTheme} = this.state
    this.setState(
      prev => ({isDarkTheme: !prev.isDarkTheme}),
      () => {
        localStorage.setItem('darkmode', isDarkTheme)
      },
    )
  }

  render() {
    const {isDarkTheme, save, savedVideosList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          changeTheme: this.changeTheme,
          save,
          savedVideosList,
          addVideosToSavedVideos: this.addVideosToSavedVideos,
          deleteVideosFromSavedVideos: this.deleteVideosFromSavedVideos,
          updateSave: this.updateSave,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            nexact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App

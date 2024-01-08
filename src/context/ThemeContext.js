import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  save: false,
  savedVideosList: [],
  addVideosToSavedVideos: () => {},
  deleteVideosFromSavedVideos: () => {},
  updateSave: () => {},
})

export default ThemeContext

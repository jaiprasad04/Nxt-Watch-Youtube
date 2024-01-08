import {AiFillFire} from 'react-icons/ai'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  MainBody,
  SidebarContainer,
  SavedVideosMainContainer,
  SavedVideosContainer,
  SavedMenuContainer,
  IconContainer,
  MenuHeading,
  VideosList,
  NoVideosContainer,
  NoVideosImg,
  FailureText,
  FailureDescription,
} from './styledComponents'

import TrendingVideoCard from '../TrendingVideoCard'
import ThemeContext from '../../context/ThemeContext'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideosList} = value
      const theme = isDarkTheme ? 'dark' : 'light'

      return (
        <SavedVideosMainContainer data-testid="savedVideos" theme={theme}>
          <Header />
          <MainBody>
            <SidebarContainer>
              <Sidebar />
            </SidebarContainer>
            <SavedVideosContainer>
              <SavedMenuContainer theme={theme}>
                <IconContainer theme={theme}>
                  <AiFillFire size={40} color="#ff0b37" />
                </IconContainer>
                <MenuHeading theme={theme}>Saved Videos</MenuHeading>
              </SavedMenuContainer>
              {savedVideosList.length === 0 ? (
                <NoVideosContainer>
                  <NoVideosImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                    alt="no saved videos"
                  />

                  <FailureText theme={theme}>No saved videos found</FailureText>
                  <FailureDescription theme={theme}>
                    You can save your videos while watching them
                  </FailureDescription>
                </NoVideosContainer>
              ) : (
                <VideosList>
                  {savedVideosList.map(each => (
                    <TrendingVideoCard videoDetails={each} key={each.id} />
                  ))}
                </VideosList>
              )}
            </SavedVideosContainer>
          </MainBody>
        </SavedVideosMainContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos

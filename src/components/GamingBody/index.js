import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  GameCardContainer,
  Thumbnail,
  ThumbnailText,
  VideoTitle,
  VideoTextContainer,
  VideoDetailsContainer,
  VideoDetailsText,
} from './styledComponents'

const GamingBody = props => {
  const {videoDetails} = props
  const {thumbnailUrl, viewCount, title, id} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'

        return (
          <GameCardContainer>
            <Link to={`/videos/${id}`} className="nav-link">
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnailText>
                <VideoTextContainer>
                  <VideoTitle theme={theme}>{title}</VideoTitle>
                  <VideoDetailsContainer>
                    <VideoDetailsText>
                      {viewCount} Watching Worldwide
                    </VideoDetailsText>
                  </VideoDetailsContainer>
                </VideoTextContainer>
              </ThumbnailText>
            </Link>
          </GameCardContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingBody

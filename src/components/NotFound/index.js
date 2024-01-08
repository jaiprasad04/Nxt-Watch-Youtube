import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

import {
  MainBody,
  SidebarContainer,
  NotFoundImage,
  NotFoundContainer,
  NotFoundText,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'

      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <MainBody>
            <SidebarContainer>
              <Sidebar />
            </SidebarContainer>
            <NotFoundContainer theme={theme}>
              <NotFoundImage src={imgUrl} alt="not found" />
              <NotFoundText theme={theme}>Page Not Found</NotFoundText>
              <NotFoundDescription theme={theme}>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </MainBody>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

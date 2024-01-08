import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiMenuAddLine} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'

import {MenuList, MenuLink, MenuHeading} from './styledComponents'

import './index.css'

class MenuItemsList extends Component {
  state = {currentPath: ''}

  componentDidMount() {
    const path = window.location.pathname
    this.setState({currentPath: path})
  }

  render() {
    const {currentPath} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          const iconColor = isDarkTheme ? '#424242' : '#7e858e'
          const iconActive = '#ff0b37'

          return (
            <MenuList>
              <Link to="/" className="nav-link">
                <MenuLink
                  theme={theme}
                  isActive={currentPath === '/'}
                  key="HOME"
                >
                  <AiFillHome
                    size={25}
                    color={currentPath === '/' ? iconActive : iconColor}
                  />

                  <MenuHeading theme={theme}>Home</MenuHeading>
                </MenuLink>
              </Link>
              <Link to="/trending" className="nav-link">
                <MenuLink
                  theme={theme}
                  isActive={currentPath === '/trending'}
                  key="TRENDING"
                >
                  <AiFillFire
                    size={25}
                    color={currentPath === '/trending' ? iconActive : iconColor}
                  />

                  <MenuHeading theme={theme}>Trending</MenuHeading>
                </MenuLink>
              </Link>
              <Link to="/gaming" className="nav-link">
                <MenuLink
                  theme={theme}
                  isActive={currentPath === '/gaming'}
                  key="GAMING"
                >
                  <IoLogoGameControllerB
                    size={25}
                    color={currentPath === '/gaming' ? iconActive : iconColor}
                  />

                  <MenuHeading theme={theme}>Gaming</MenuHeading>
                </MenuLink>
              </Link>

              <Link to="/saved-videos" className="nav-link">
                <MenuLink
                  theme={theme}
                  isActive={currentPath === '/saved-videos'}
                  key="SAVED_VIDEOS"
                >
                  <RiMenuAddLine
                    size={25}
                    color={
                      currentPath === '/saved-videos' ? iconActive : iconColor
                    }
                  />

                  <MenuHeading theme={theme}>Saved videos</MenuHeading>
                </MenuLink>
              </Link>
            </MenuList>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default MenuItemsList

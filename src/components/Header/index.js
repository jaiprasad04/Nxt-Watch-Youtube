import {withRouter, Link} from 'react-router-dom'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import MenuItemsList from '../MenuItemsList'

import ThemeContext from '../../context/ThemeContext'

import 'reactjs-popup/dist/index.css'
import './index.css'

import {
  NavMobileContainer,
  HeaderLogoImg,
  NavMobileIcons,
  IconButton,
  NavLargeContainer,
  ResponsiveContainer,
  LogoutPopupContent,
  Button,
  ProfileIcon,
  NavLargeIcons,
  NavListItem,
  LargeLogoutButton,
  MenuPopupMobile,
  MenuListMobile,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const theme = isDarkTheme ? 'dark' : 'light'
      const color = isDarkTheme ? 'white' : 'black'

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <>
          <NavMobileContainer theme={theme}>
            <Link to="/">
              <HeaderLogoImg src={websiteLogo} alt="website logo" />
            </Link>
            <NavMobileIcons>
              <NavListItem>
                <IconButton
                  type="button"
                  data-testid="theme"
                  onClick={() => changeTheme()}
                >
                  {isDarkTheme ? (
                    <FiSun color="white" size={22} />
                  ) : (
                    <FaMoon size={22} />
                  )}
                </IconButton>
              </NavListItem>
              <NavListItem>
                <Popup
                  modal
                  trigger={
                    <IconButton type="button">
                      <GiHamburgerMenu color={color} size={22} />
                    </IconButton>
                  }
                  className="mobile-popup-content"
                >
                  {close => (
                    <MenuPopupMobile theme={theme}>
                      <IconButton type="button" onClick={() => close()}>
                        <IoMdClose size={20} color={color} />
                      </IconButton>
                      <MenuListMobile>
                        <MenuItemsList />
                      </MenuListMobile>
                    </MenuPopupMobile>
                  )}
                </Popup>
              </NavListItem>
              <NavListItem>
                <Popup
                  modal
                  trigger={
                    <IconButton type="button">
                      <FiLogOut color={color} size={22} />
                    </IconButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <LogoutPopupContent theme={theme}>
                      <p className="logout-description">
                        Are you sure, you want to logout?
                      </p>
                      <div className="logout-buttons">
                        <Button outline type="button" onClick={() => close()}>
                          Cancel
                        </Button>
                        <Button
                          bgColor="blue"
                          color="white"
                          type="button"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </Button>
                      </div>
                    </LogoutPopupContent>
                  )}
                </Popup>
              </NavListItem>
            </NavMobileIcons>
          </NavMobileContainer>
          <NavLargeContainer theme={theme}>
            <ResponsiveContainer>
              <Link to="/">
                <HeaderLogoImg src={websiteLogo} alt="website logo" />
              </Link>
              <NavLargeIcons>
                <NavListItem>
                  <IconButton type="button" onClick={() => changeTheme()}>
                    {isDarkTheme ? (
                      <FiSun color="white" size={22} />
                    ) : (
                      <FaMoon size={22} />
                    )}
                  </IconButton>
                </NavListItem>
                <NavListItem>
                  <ProfileIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavListItem>
                <NavListItem>
                  <Popup
                    modal
                    trigger={
                      <LargeLogoutButton theme={theme} outline>
                        Logout
                      </LargeLogoutButton>
                    }
                    className="logout-popup"
                  >
                    {close => (
                      <LogoutPopupContent theme={theme}>
                        <p className="logout-description">
                          Are you sure, you want to logout?
                        </p>
                        <div>
                          <Button outline type="button" onClick={() => close()}>
                            Cancel
                          </Button>
                          <Button
                            bgColor="blue"
                            color="white"
                            type="button"
                            onClick={onClickLogout}
                          >
                            Confirm
                          </Button>
                        </div>
                      </LogoutPopupContent>
                    )}
                  </Popup>
                </NavListItem>
              </NavLargeIcons>
            </ResponsiveContainer>
          </NavLargeContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)

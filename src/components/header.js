import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <nav className="header-nav">
        <div className="header-container">
          <img
            alt={props.imageAlt2}
            src={props.imageSrc2}
            className="header-image"
          />
          <Link to="/" className="header-navlink Large">
            Fovvy&amp;Co
          </Link>
          <div className="header-menu">
            <Link to="/" className="header-navlink1 Large">
              Cybersecurity
            </Link>
            <Link to="/profile" className="header-navlink2 Large">
              UX
            </Link>
            <div
              data-thq="thq-dropdown"
              className="header-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle"
              >
                <span className="header-text">Resources</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="header-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="header-icon">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul data-thq="thq-dropdown-list" className="header-dropdown-list">
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle1"
                  >
                    <span>
                      {props.text ?? (
                        <Fragment>
                          <span className="header-text4">Awareness</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown01 list-item"
                ></li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown02 list-item"
                ></li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown03 list-item"
                ></li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown04 list-item"
                ></li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown05 list-item"
                ></li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown06 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle2"
                  >
                    <span className="header-text2">Tools</span>
                    <svg viewBox="0 0 1024 1024" className="header-icon2">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="header-dropdown-arrow1"
                    ></div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="header-dropdown-list1"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="header-dropdown07 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="header-dropdown-toggle3"
                      >
                        <a
                          href="https://www.virustotal.com/gui/"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="header-link"
                        >
                          VirusTotal
                        </a>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="header-dropdown08 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="header-dropdown-toggle4"
                      >
                        <span className="header-text3">TryHackMe</span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="header-dropdown09 list-item"
                    ></li>
                  </ul>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown10 list-item"
                ></li>
              </ul>
            </div>
          </div>
          <div className="header-container1">
            <div className="header-container2">
              <PrimaryPinkButton button="GET IN"></PrimaryPinkButton>
            </div>
            <div data-role="BurgerMenu" className="header-burger-menu">
              <animate-on-reveal direction="alternate">
                <svg
                  viewBox="0 0 1024 1024"
                  data-thq-animate-on-reveal="true"
                  className="header-icon4 button"
                >
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </animate-on-reveal>
            </div>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink3 Large">
            Soft UI Design System
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon6">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink4 Large">
              Home
            </Link>
            <Link to="/profile" className="header-navlink5 Large">
              Profile
            </Link>
            <Link to="/coming-soon" className="header-navlink6 Large">
              Coming Soon
            </Link>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  rootClassName: '',
  text: undefined,
  imageSrc2: '/fovvyshadow2-200w.png',
  imageAlt2: 'image',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.element,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
}

export default Header

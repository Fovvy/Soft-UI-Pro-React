import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer6.css'

const Footer6 = (props) => {
  return (
    <footer className="footer6-container thq-section-padding">
      <div className="footer6-content">
        <div className="footer6-container1">
          <strong>
            {props.column1Title ?? (
              <Fragment>
                <strong className="footer6-text2 thq-body-large">
                  Fovvy&apos;s
                </strong>
              </Fragment>
            )}
          </strong>
          <div className="footer6-newsletter">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer6-image1"
            />
          </div>
        </div>
        <div className="footer6-links">
          <div className="footer6-column2">
            <strong>
              {props.column2Title ?? (
                <Fragment>
                  <strong className="footer6-text thq-body-large">
                    Resources
                  </strong>
                </Fragment>
              )}
            </strong>
            <div className="footer6-footer-links">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.link6 ?? (
                  <Fragment>
                    <span className="footer6-text1 thq-body-small">
                      Tryhackme
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.link7 ?? (
                  <Fragment>
                    <span className="footer6-text3 thq-body-small">
                      Codepen
                    </span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
          <div className="footer6-column3">
            <strong>
              {props.socialLinkTitleCategory ?? (
                <Fragment>
                  <strong className="footer6-text4 thq-body-large">
                    Connect with us on social media
                  </strong>
                </Fragment>
              )}
            </strong>
            <div className="footer6-social-links">
              <div className="footer6-link">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="thq-icon-small"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <span className="thq-body-small">fovvy.s</span>
              </div>
              <div className="footer6-link1">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="thq-icon-small"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
                <span className="thq-body-small">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span>
        {props.content3 ?? (
          <Fragment>
            <span className="footer6-text5 thq-body-small">
              © 2024 Fovvy&apos;s. All rights reserved.
            </span>
          </Fragment>
        )}
      </span>
    </footer>
  )
}

Footer6.defaultProps = {
  column2Title: undefined,
  link6: undefined,
  logoSrc: '/fovvyshadow2-1500h.png',
  column1Title: undefined,
  link7: undefined,
  socialLinkTitleCategory: undefined,
  content3: undefined,
  logoAlt: 'Soft UI Design System Logo',
}

Footer6.propTypes = {
  column2Title: PropTypes.element,
  link6: PropTypes.element,
  logoSrc: PropTypes.string,
  column1Title: PropTypes.element,
  link7: PropTypes.element,
  socialLinkTitleCategory: PropTypes.element,
  content3: PropTypes.element,
  logoAlt: PropTypes.string,
}

export default Footer6

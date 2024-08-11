import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact9.css'

const Contact9 = (props) => {
  return (
    <div className="contact9-container thq-section-padding">
      <div className="contact9-max-width thq-section-max-width">
        <div className="contact9-content thq-flex-row">
          <div className="contact9-content1">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact9-text6 thq-heading-2">Contact Us</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact9-text5 thq-body-large">
                    For general inquiries and partnership opportunities, please
                    email us at contact@fovvynco.com
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact9-content2 thq-flex-row">
          <div className="contact9-container1">
            <iframe
              src={props.location1GoogleMap}
              title="Map"
              className="contact9-iframe"
            ></iframe>
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact9-text7 thq-heading-3">
                    Fovvy&amp;Co Headquarters
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact9-text4 thq-body-large">
                    123 Cybersecurity Street, Digital City, Techland
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact9-container2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact9.defaultProps = {
  location1Description: undefined,
  content1: undefined,
  heading1: undefined,
  location1: undefined,
  location1GoogleMap:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.77077631063!2d26.012237766112886!3d44.43779612993267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest!5e0!3m2!1sen!2sro!4v1713441854828!5m2!1sen!2sro',
}

Contact9.propTypes = {
  location1Description: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  location1: PropTypes.element,
  location1GoogleMap: PropTypes.string,
}

export default Contact9

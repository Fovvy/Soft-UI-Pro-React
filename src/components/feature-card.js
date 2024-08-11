import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className="feature-card-container">
      <h5>
        {props.heading ?? (
          <Fragment>
            <h5 className="feature-card-text2 HeadingThree">
              <span>Design</span>
            </h5>
          </Fragment>
        )}
      </h5>
      <span className="feature-card-text1">{props.text}</span>
    </div>
  )
}

FeatureCard.defaultProps = {
  heading: undefined,
  text: 'This design system is fully supported on any device.',
}

FeatureCard.propTypes = {
  heading: PropTypes.element,
  text: PropTypes.string,
}

export default FeatureCard

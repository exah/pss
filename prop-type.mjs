import PropTypes from 'prop-types'

const valuePropType = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.string,
  PropTypes.number
])

export const propType = PropTypes.oneOfType([
  valuePropType,
  PropTypes.arrayOf(valuePropType),
  PropTypes.objectOf(valuePropType)
])

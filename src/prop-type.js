import PropTypes from 'prop-types'

export const valuePropType = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.string,
  PropTypes.number,
  PropTypes.func,
  PropTypes.arrayOf(PropTypes.string)
])

export const propType = PropTypes.oneOfType([
  valuePropType,
  PropTypes.objectOf(valuePropType)
])

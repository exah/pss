import PropTypes from 'prop-types'

export const propType = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.string,
  PropTypes.number,
  PropTypes.func,
  PropTypes.array,
  PropTypes.object
])

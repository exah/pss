const PropTypes = require('prop-types')

var valuePropType = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.string,
  PropTypes.number
])

var propType = PropTypes.oneOfType([
  valuePropType,
  PropTypes.arrayOf(valuePropType),
  PropTypes.objectOf(valuePropType)
])

/**
 * Return prop types for styles created with `pss`.
 *
 * Must have [prop-types](https://www.npmjs.com/package/prop-types) installed in project.
 *
 * @example
 * import { sizes } from 'pss'
 * import { getPropTypes } from 'pss/prop-types'
 *
 * cont Box = styled('div')`
 *   ${sizes}
 * `
 *
 * Box.propTypes = {
 *   ...getPropTypes(sizes)
 * }
 */

function getPropTypes (input) {
  if (!Array.isArray(input.props)) {
    console.warn('First argument must be function with `.props` static property')
    return
  }

  return input.props.reduce(
    function propsListToPropTypes (acc, name) {
      return Object.assign(acc, { [name]: propType })
    },
    {}
  )
}

module.exports = {
  propType,
  getPropTypes
}

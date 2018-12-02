import PropTypes from 'prop-types'
import { getThemeMediaKeys } from './getters'
import { keys, hasMediaKeys } from './utils'

export function objectWithMediaKeysType (props, propName, componentName) {
  const mediaKeys = getThemeMediaKeys(props)

  if (mediaKeys.length === 0 || hasMediaKeys(mediaKeys, keys(props[propName]))) {
    return null
  }

  return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Object values should contain \`theme.media\` keys. Validation failed.`)
}

export const styleValuePropType = PropTypes.oneOfType([
  PropTypes.bool.isRequired,
  PropTypes.string.isRequired,
  PropTypes.number.isRequired,
  PropTypes.func.isRequired,
  objectWithMediaKeysType
])

export const cssPropPropType = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.func
])

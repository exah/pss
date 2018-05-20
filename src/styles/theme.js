import { themeColors, isStr } from '../utils'
import { getStylesFromPropsWithMedia } from '../prop-styles'

const getColor = (theme, key, value) => {
  if (value == null) return null
  if (value === false) return 'transparent'
  const colors = themeColors(theme)
  const fallback = theme.palette[value] && theme.palette[value][key]
    ? theme.palette[value]
    : colors
  return isStr(value)
    ? value[0] === '#' ? value : colors[value] || fallback[key]
    : colors[key]
}

const themeStyle = (value, { theme }) => {
  if (value == null) return {}
  if (value === false) {
    return {
      backgroundColor: 'unset',
      color: 'unset'
    }
  }
  const palette = themeColors(theme, value)
  return {
    backgroundColor: palette.background,
    color: palette.foreground
  }
}

const themeProp = (cssProp, key) => (value, props) => {
  const color = getColor(props.theme, key, value)
  if (!color) return {}
  return {
    [cssProp]: color
  }
}

const themeShadow = (value, { theme }) => {
  if (!value) return {}

  if (isStr(value) && value.split(' ').length > 1) {
    return { boxShadow: value }
  }

  const color = getColor(theme, 'shadow', value)
  if (!color) return {}

  return { boxShadow: `0 0 ${theme.sizes.shadow}px 0 ${color}` }
}

export const theme = getStylesFromPropsWithMedia({
  tm: themeStyle,
  fg: themeProp('color', 'foreground'),
  bg: themeProp('backgroundColor', 'background'),
  bdc: themeProp('borderColor', 'border'),
  shadow: themeShadow
}, 'theme')

import { isStr } from './is'

const RGB_REGEX = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*?([-+]?[0-9]*[.]?[0-9]+)?\s*?\)$/

const toHex = (val) => {
  const hex = val.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}

const isHex = (str) => isStr(str) && str[0] === '#'
const isRgb = (str) => isStr(str) && str.slice(0, 3) === 'rgb'
const isHsl = (str) => isStr(str) && str.slice(0, 3) === 'hsl'

const parseHexColor = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return { r, g, b, a: 1 }
}

const parseRgb = (rgb) => {
  const match = rgb.match(RGB_REGEX)
  if (!match) return null

  const [ r, g, b, a = 1 ] = match
    .slice(1)
    .map((val) => val == null ? val : Number(val))

  return { r, g, b, a }
}

const isColor = (str) => isHex(str) || isRgb(str) || isHsl(str)

const parseColor = (str) =>
  isHex(str) ? parseHexColor(str) : isRgb(str) ? parseRgb(str) : null

const toHexColor = ({ r, g, b }) => '#' + toHex(r) + toHex(g) + toHex(b)

const toRgb = (color, alpha) => {
  const parsed = parseColor(color)
  if (parsed == null) return color

  const { r, g, b } = parsed
  const joinedColors = [ r, g, b ].join(', ')

  return alpha ? `rgba(${joinedColors}, ${alpha})` : `rgb(${joinedColors})`
}

const randomHexColor = () => '#' + (
  Math.floor(Math.random() * (1 << 24)).toString(16)
)

export {
  isColor,
  parseColor,
  toHexColor,
  toRgb,
  randomHexColor
}

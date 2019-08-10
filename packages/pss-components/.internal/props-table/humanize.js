import { isValidElementType } from 'react-is'
import { isStr } from '@exah/utils'

const RE_OBJECTOF = /(?:React\.)?(?:PropTypes\.)?objectOf\((?:React\.)?(?:PropTypes\.)?(\w+)\)/

export function getTypeStr ({
  name = '',
  raw = '',
  value,
  computed
}) {
  switch (name.toLowerCase()) {
    case 'instanceof':
      return `Class(${value})`
    case 'enum':
      if (computed) return value
      return value
        ? value.map((v) => `${v.value}`).join(' │ ')
        : raw
    case 'union':
      return value
        ? value.map((t) => `${getTypeStr(t)}`).join(' │ ')
        : raw
    case 'array':
      return raw
    case 'arrayof':
      return `Array<${getTypeStr(value)}>`
    case 'custom':
      if (raw.indexOf('function') !== -1 || raw.indexOf('=>') !== -1) {
        return 'Custom(Function)'
      } else {
        if (raw.toLowerCase().indexOf('objectof') !== -1) {
          const m = raw.match(RE_OBJECTOF)
          if (m && m[1]) return `ObjectOf(${m[1]})`
          return 'ObjectOf'
        }
      }
      return 'Custom'
    case 'bool':
      return 'Boolean'
    case 'func':
      return 'Function'
    case 'shape':
      const rst = {}

      Object.keys(value).forEach(key => {
        rst[key] = getTypeStr(value[key])
      })

      return JSON.stringify(rst, null, 2)
    default:
      return name
  }
}

const getDisplayName = (value) => isStr(value)
  ? value
  : value.displayName || value.name || 'Component'

export const getDefaultValue = (value) => {
  if (isStr(value)) {
    return JSON.stringify(value.replace(/'/g, ''))
  }

  return isValidElementType(value)
    ? getDisplayName(value)
    : JSON.stringify(value)
}

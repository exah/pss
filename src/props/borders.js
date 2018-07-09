import { createPropStyles, colorProp } from '../core'
import { SHORT_DIRECTIONS } from '../constants'
import { getSize, mapObj } from '../utils'

const borderStyle = (dir = '') => (val, { theme }, mediaKey) => {
  const [ widthValue, style = 'solid' ] = String(val || '').split(' ')
  const widthNum = val === true ? 1 : Number(widthValue)
  const width = isNaN(widthNum) ? getSize(theme, widthValue) : widthNum

  return Object.assign({
    ['border' + dir + 'Width']: width || 0
  }, style && {
    ['border' + dir + 'Style']: style
  })
}

const borderProps = createPropStyles({
  bd: borderStyle(),
  bdc: colorProp('borderColor', 'border'),
  ...mapObj(SHORT_DIRECTIONS, (shortDir, longDir) => [
    'bd' + shortDir,
    longDir.map((dir) => borderStyle(dir))
  ])
})

export {
  borderProps
}

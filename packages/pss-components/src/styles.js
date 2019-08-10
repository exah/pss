import { isNum, fallbackTo, path } from '@exah/utils'
import { createSpaceValue, createStyles, createRule, splitUnit } from 'pss'
import { DEFAULT_GRID } from './constants'

const createItemsSpace = (axes, selectors) => createRule({
  getValue: createSpaceValue(),
  getStyle (value, props) {
    const [num, unit = 'px'] = splitUnit(value)
    const size = `${num / 2}${unit}`

    return {
      ...(axes.x && {
        marginLeft: `-${size}`,
        marginRight: `-${size}`
      }),
      ...(axes.y && {
        marginTop: `-${size}`,
        marginBottom: `-${size}`,
        [selectors.getRowSelector(props)]: {
          marginTop: size
        }
      }),
      [selectors.getItemSelector(props)]: {
        ...(axes.x && {
          paddingLeft: size,
          paddingRight: size
        }),
        ...(axes.y && {
          paddingTop: size,
          paddingBottom: size
        })
      }
    }
  }
})

export const createFlexGrid = (selectors) => createStyles({
  space: createItemsSpace({ x: true, y: true }, selectors),
  spacex: createItemsSpace({ x: true }, selectors),
  spacey: createItemsSpace({ y: true }, selectors)
})

function getSize (value, props) {
  const grid = Number(path('columns', DEFAULT_GRID)(props))
  const column = Number(fallbackTo(value, 1))

  if (!isNum(column) || !isNum(grid)) {
    return null
  }

  return ((column / grid) * 100) + '%'
}

export const flexGridItem = createStyles({
  offset (value, props) {
    const size = getSize(value, props)

    if (size == null) {
      return {}
    }

    return {
      marginLeft: size
    }
  },
  column (value, props) {
    if (value === 'auto' || value === true) {
      return {
        flexGrow: 1,
        maxWidth: '100%'
      }
    }

    const size = getSize(value, props)

    if (size == null) {
      return {}
    }

    return {
      flexGrow: 0,
      width: size
    }
  }
})

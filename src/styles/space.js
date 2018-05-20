import { toPairs } from 'ramda'
import { getSpace, toArr } from '../utils'
import { getStylesFromPropsWithMedia, getEveryMediaStyle } from '../prop-styles'

const DIRECTIONS = {
  l: 'Left',
  r: 'Right',
  t: 'Top',
  b: 'Bottom',
  x: [ 'Left', 'Right' ],
  y: [ 'Top', 'Bottom' ]
}

const CSS_PROPERTIES = {
  mg: 'margin',
  pd: 'padding'
}

const toRule = (cssProps, val) => val == null ? null : toArr(cssProps).reduce(
  (acc, key) => ({ ...acc, [key]: val }),
  {}
)

const spacePropsEntries = toPairs(CSS_PROPERTIES)
  .reduce((prevProps, [ shortProp, longProp ]) => {
    const propsWithDir = toPairs(DIRECTIONS)
      .map(([ shortDir, longDir ]) => [
        shortProp + shortDir, toArr(longDir).map((dir) => longProp + dir)
      ])
    return [
      ...prevProps,
      ...propsWithDir,
      [ shortProp, [ longProp ] ]
    ]
  }, [])

const spacePropsShortcuts = spacePropsEntries.reduce(
  (acc, [ propName, cssProps ]) => ({
    ...acc,
    [propName]: (step, props, propMediaKey) => {
      const spaceValue = getSpace(props, step)

      if (propMediaKey != null) return toRule(cssProps, spaceValue(propMediaKey))

      return getEveryMediaStyle(
        props,
        (mediaKey) => toRule(cssProps, spaceValue(mediaKey, true))
      )
    }
  }), {}
)

export const space = getStylesFromPropsWithMedia(spacePropsShortcuts, 'space')

import { toPairs } from 'ramda'
import { SHORT_DIRECTIONS } from '../constants'
import { getSpace, toArr } from '../utils'
import { getStylesFromPropsWithMedia, getEveryMediaStyle } from '../prop-styles'

const toRule = (cssProps, val) => val == null ? null : toArr(cssProps).reduce(
  (acc, key) => ({ ...acc, [key]: val }),
  {}
)

const expandProps = (propBaseName, cssPropName) => [
  ...toPairs(SHORT_DIRECTIONS).map(([ shortDir, longDir ]) => [
    propBaseName + shortDir, toArr(longDir).map((dir) => cssPropName + dir)
  ]),
  [ propBaseName, [ cssPropName ] ]
]

const createSpace = (propBaseName, cssPropName) =>
  expandProps(propBaseName, cssPropName).reduce(
    (acc, [ propName, cssProps ]) => ({
      ...acc,
      [propName]: (value, compProps, propMediaKey) => {
        const spaceValue = getSpace(compProps, value)

        if (propMediaKey != null) {
          return toRule(cssProps, spaceValue(propMediaKey))
        }

        return getEveryMediaStyle(
          compProps,
          (mediaKey) => toRule(cssProps, spaceValue(mediaKey, true))
        )
      }
    }), {}
  )

const marginProps = createSpace('mg', 'margin')
const paddingProps = createSpace('pd', 'padding')

export const margin = getStylesFromPropsWithMedia(marginProps, 'margin')
export const padding = getStylesFromPropsWithMedia(paddingProps, 'padding')

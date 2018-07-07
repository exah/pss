// @flow

//
// Styles
//

type CSSProp = string
type CSSVal = string | number
type StyleObj = { [CSSProp]: CSSVal }
type Styles = Array<StyleObj>

//
// Prop Styles
//

type CompPropName = string
type PropStyleVal = string | number | boolean | Function | null
type Props = { [theme: CompPropName]: PropStyleVal }
type DynamicStyleFn = (props: Props, mediaKey?: string) => StyleObj | Styles
type PropStyleFn = (value: PropStyleVal, props?: Props, mediaKey?: string) => StyleObj

/**
 * Object with keys represents component prop name
 * and value as style object or function that returns style
 *
 * @type {Object}
 *
 * @example
 *
 * {
 *   hide: { display: 'none' },
 *   width: (value, props, mediaKey) => ({
 *     width: mediaKey === 'M' ? 50 : value
 *   })
 * }
 */
type PropStyles = { [CompPropName]: PropStyleFn }

//
// Themes
//

type ThemeDefaultKey = 'default'
type ThemeKey = 'media' | 'space' | 'size' | 'color' | 'palette' | 'textStyle'

type ThemeObj = $Shape<{
  default: {| [ThemeKey]: string | ThemeDefaultKey |},
  media: {| [ThemeDefaultKey | string]: string | null |},
  space: {| [ThemeDefaultKey | string]: Array<number> |},
  size: {| [string]: string | number |},
  color: {| [string]: string |},
  palette: {| [ThemeDefaultKey | string]: {} |},
  textStyle: {| [ThemeDefaultKey | string]: {} |}
}>

export type {
  ThemeKey,
  ThemeObj,
  CompPropName,
  Props,
  CSSProp,
  CSSVal,
  StyleObj,
  Styles,
  DynamicStyleFn,
  PropStyles,
  PropStyleFn,
  PropStyleVal
}

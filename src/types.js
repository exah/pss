type CSSProp = string
type CSSValue = string | number

type Style = { [CSSProp]: CSSValue }
type Styles = Array<Style>

type CompPropName = string

type CompProps = {|
  [theme: CompPropName]: Object,
  [CompPropName]: mixed
|}

type PropCSSValue = string | number | boolean | null
type StyleFn = (value: PropCSSValue) => (props: CompProps, mediaKey: string) => Style
type PropStyle = (value: PropCSSValue, props?: CompProps, mediaKey?: string) => Style

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
type PropStylesMap = { [CompPropName]: PropStyle }

type ThemeKey = string

export {
  CSSProp,
  CSSValue,
  Style,
  StyleFn,
  Styles,
  ThemeKey,
  CompPropName,
  PropStyle,
  PropStylesMap,
  PropCSSValue
}

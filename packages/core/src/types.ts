import * as CSS from 'csstype'
import SCALES from './scales.js'

type Length = (string & {}) | number

export type CSSInterpolation =
  | null
  | undefined
  | boolean
  | number
  | string
  | CSSObject
  | CSSInterpolation[]

type ThemeValueForProperty<Property extends string> =
  Property extends keyof typeof SCALES
    ? ThemeValue<`${(typeof SCALES)[Property]}`>
    : never

type CSSPropertyValue<Property extends string> =
  Property extends keyof CSSProperties
    ? CSSProperties[Property]
    : Property extends 'marginX' | 'marginY'
      ? CSSProperties['margin']
      : Property extends 'paddingX' | 'paddingY'
        ? CSSProperties['padding']
        : never

type CSSObjectProperties = {
  [Property in keyof CSSProperties | keyof typeof SCALES]?:
    | CSSPropertyValue<Property & string>
    | ThemeValueForProperty<Property & string>
}

export interface CSSObject extends CSSObjectProperties {
  /** custom property or selector */
  [propertiesName: string]: CSSInterpolation
}

export interface CSSProperties extends CSS.Properties<Length> {
  size?: CSS.Property.Width<Length> | CSS.Property.Height<Length>
}

export interface SystemTheme {}

export interface BreakpointsSystemTheme {
  breakpoints: { [K: string]: string | null }
}

export interface ColorSchemesSystemTheme {
  colorSchemes: { [K: string]: CSSObject | null }
}

export type ThemeValue<Key extends string> = Key extends keyof SystemTheme
  ? keyof SystemTheme[Key]
  : never

export type StyleValue<Prop extends string> =
  | (Prop extends keyof CSSProperties ? CSSProperties[Prop] : never)
  | ThemeValueForProperty<Prop>

export type VariantValue<Key extends string> = Key extends keyof SystemTheme
  ? keyof SystemTheme[Key]
  : string

export type ColorSchemesValue<
  Key extends keyof SystemTheme = keyof SystemTheme
> = Key extends 'colorSchemes' ? keyof SystemTheme[Key] : never

export type BreakpointsRecord<
  Value,
  Key extends keyof SystemTheme = keyof SystemTheme
> = Key extends 'breakpoints'
  ? { [K in keyof SystemTheme[Key]]?: Value }
  : never

export type Responsive<Value> =
  | Value
  | Record<string, Value>
  | BreakpointsRecord<Value>

export type Get<Path, Input> = Path extends `${infer Key}.${infer Rest}`
  ? Key extends keyof Input
    ? Get<Rest, Input[Key]>
    : undefined
  : Path extends keyof Input
  ? Input[Path]
  : undefined

import type { Get } from './types'

export const get = <Path extends string | number, Input>(
  path?: Path,
  input?: Input
) =>
  (String(path ?? '')
    .split('.')
    .reduce((a, b) => Object(a)[b], input) as unknown) as Get<Path, Input>

export const isObject = <T extends object, I>(input: T | I): input is T =>
  input !== null && typeof input === 'object'

export const isString = (input: unknown): input is string =>
  typeof input === 'string'

export const isNumber = (input: unknown): input is number =>
  typeof input === 'number'

export const isPropertyKey = (input: unknown): input is string | number =>
  isString(input) || isNumber(input)

export const isPrimitive = (
  input: unknown
): input is string | number | boolean | null | undefined =>
  isPropertyKey(input) || typeof input === 'boolean' || input == null

export const px = (input: number | `${number}px`) =>
  typeof input === 'number' ? `${input}px` : input

export const em = (input: number, base: number = 16) => `${input / base}em`
export const rem = (input: number, base: number = 16) => `${input / base}rem`

export const toArray = <T>(input: T | T[] | undefined): T[] =>
  Array.isArray(input) ? input : input != null ? [input] : []

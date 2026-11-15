import styled from '@emotion/styled'
import {
  colorScheme,
  ColorSchemeProps,
  CSSObject,
  pss,
  PSS,
  variant,
  VariantProps,
} from 'pss'

interface VariantKeyProps<V> {
  /** @private */
  $key?: V
}

function key({ $key: key }: VariantKeyProps<string>) {
  return key ? variant(key, 'default') : null
}

interface InternalPSS {
  /** @private */
  $$?: CSSObject
}

function internalPSS({ $$, ...rest }: InternalPSS) {
  return pss({ ...rest, pss: $$ })
}

type Cast<A, B> = A extends B ? A : B

export type ElementType<E extends string> = E extends keyof React.ReactHTML
  ? React.ReactHTML[E] extends React.DetailedHTMLFactory<any, infer T>
    ? Cast<T, HTMLElement>
    : HTMLElement
  : unknown

export interface HTMLProps<E extends string>
  extends Omit<React.AllHTMLAttributes<ElementType<E>>, 'as' | 'ref'> {}

export interface BaseProps<E extends string, V extends string>
  extends HTMLProps<E>,
    BaseInnerProps<E, V> {}

export interface BaseInnerProps<E extends string, V extends string>
  extends VariantKeyProps<V>,
    VariantProps<V>,
    ColorSchemeProps,
    InternalPSS,
    PSS {
  as?: E | React.ComponentType<any>
  ref?: React.Ref<ElementType<E>>
}

/** @private */
export interface BaseComponent<
  Element extends string = 'div',
  Variant extends string = never,
  Props extends {} = {}
> extends React.VFC<BaseProps<keyof React.ReactHTML, Variant> & Props> {
  <T extends string = Element, V extends string = Variant>(
    props: BaseProps<T, V> & Props
  ): React.ReactElement | null
}

export const Base: BaseComponent = styled<any>('div')(
  {
    boxSizing: 'border-box',
    '&::before, &::after': { boxSizing: 'inherit' },
    appearance: 'none',
    margin: 0,
    padding: 0,
    border: 0,
    minWidth: 0,
    borderRadius: 0,
    background: 'none',
    font: 'inherit',
    color: 'inherit',
    textAlign: 'inherit',
    textDecoration: 'none',
  },
  colorScheme,
  key,
  internalPSS,
  pss
)

Base.displayName = 'Base'

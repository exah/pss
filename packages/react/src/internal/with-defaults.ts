import * as React from 'react'

interface EmotionComponent<Props> extends React.FunctionComponent<Props> {
  __emotion_styles: object
}

export function withDefaults<
  Props extends object
>(
  Component: EmotionComponent<Props>,
  defaults: Partial<NoInfer<Props>>
): EmotionComponent<Props> {
  const Wrapped: EmotionComponent<Props> = Object.assign(
    (props: Props) => {
      const mergedProps = { ...defaults, ...props }

      for (const key of Object.keys(defaults) as Array<keyof Props>) {
        if (props[key] === undefined) {
          Object.assign(mergedProps, { [key]: defaults[key] })
        }
      }

      return React.createElement(Component, mergedProps)
    },
    { __emotion_styles: Component.__emotion_styles }
  )

  Wrapped.displayName = Component.displayName
  Object.defineProperty(Wrapped, 'toString', {
    value: () => Component.toString(),
  })

  return Wrapped
}

import type { EmotionMatchers, StyleRuleOptions } from '@emotion/jest'

declare module 'vitest' {
  interface Assertion<R extends void | Promise<void> = void, T = unknown> {
    toHaveStyleRule(
      property: Parameters<EmotionMatchers['toHaveStyleRule']>[1],
      value: Parameters<EmotionMatchers['toHaveStyleRule']>[2],
      options?: StyleRuleOptions
    ): T
  }
}

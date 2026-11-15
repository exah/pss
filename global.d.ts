import type { EmotionMatchers } from '@emotion/jest'

declare global {
  namespace jest {
    interface Matchers<R = void, T = {}> extends EmotionMatchers {}
  }
}

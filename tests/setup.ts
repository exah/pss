import '@testing-library/jest-dom/extend-expect'
import * as emotion from '@emotion/jest'
import { expect } from 'vitest'

expect.extend({
  toHaveStyleRule: emotion.matchers.toHaveStyleRule,
})

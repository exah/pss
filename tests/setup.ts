import '@testing-library/jest-dom/vitest'
import {matchers} from '@emotion/jest'
import { cleanup } from '@testing-library/react'
import { afterEach, expect } from 'vitest'

afterEach(() => cleanup())

expect.extend({
  toHaveStyleRule: matchers.toHaveStyleRule,
})

import 'parse-prop-types'
import React from 'react'
import { ThemeProvider } from '../src'
import { theme } from './demo-theme'

export default (props) =>
  <ThemeProvider theme={theme} {...props} />

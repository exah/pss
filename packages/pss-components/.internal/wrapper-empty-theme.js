import 'parse-prop-types'
import React from 'react'
import { ThemeProvider } from '../src'
import { theme } from './empty-theme'

export default (props) =>
  <ThemeProvider theme={theme} {...props} />

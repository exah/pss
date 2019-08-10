import React from 'react'
import { initArr } from '@exah/utils'
import { renderJSON, anyClassName } from '../.internal/helpers'
import { theme } from '../.internal/demo-theme'
import { Grid, ThemeProvider } from '../src'

describe('Grid', () => {
  const renderGridItems = (length, col, row) => initArr(length, (index) => (
    <Grid.Item column={col} row={row} key={index}>
      {col}
    </Grid.Item>
  ))

  test('snapshot', () => {
    const result = renderJSON(
      <ThemeProvider theme={theme}>
        <Grid templateColumns='repeat(12, 1fr)'>
          {renderGridItems(12, 'span 1', 1)}
          {renderGridItems(6, 'span 2', 2)}
          {renderGridItems(3, 'span 4', 3)}
        </Grid>
      </ThemeProvider>
    )

    expect(result).toMatchSnapshot()
  })

  test('as selector', () => {
    expect(`${Grid}`).toEqual(anyClassName)
    expect(`${Grid.Item}`).toEqual(anyClassName)
  })
})

import React, { Fragment } from 'react'
import { initArr } from '@exah/utils'
import { renderJSON, anyClassName } from '../.internal/helpers'
import { theme } from '../.internal/demo-theme'
import { Box, FlexGrid, ThemeProvider } from '../src'

describe('FlexGrid', () => {
  const renderFlexGridItems = (length, col) => initArr(length, (index) => (
    <FlexGrid.Item column={col} key={index}>
      <Box>
        {col}
      </Box>
    </FlexGrid.Item>
  ))

  test('as selector', () => {
    expect(`${FlexGrid}`).toEqual(anyClassName)
    expect(`${FlexGrid.Item}`).toEqual(anyClassName)
  })

  test('basic', () => {
    const result = renderJSON(
      <ThemeProvider theme={theme}>
        <Fragment>
          <FlexGrid>
            {renderFlexGridItems(12, 1)}
          </FlexGrid>
        </Fragment>
      </ThemeProvider>
    )

    expect(result).toMatchSnapshot()
  })

  test('vertical and horizontal space', () => {
    const result = renderJSON(
      <ThemeProvider theme={theme}>
        <FlexGrid space={2}>
          {renderFlexGridItems(12, 1)}
          {renderFlexGridItems(6, 2)}
          {renderFlexGridItems(4, 3)}
          {renderFlexGridItems(3, 4)}
          {renderFlexGridItems(2, 6)}
          {renderFlexGridItems(1, 12)}
        </FlexGrid>
      </ThemeProvider>
    )

    expect(result).toMatchSnapshot()
  })
})

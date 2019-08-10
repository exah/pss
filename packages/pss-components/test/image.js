import React from 'react'
import { renderJSON, anyClassName } from '../.internal/helpers'
import { Image } from '../src'

describe('Image', () => {
  test('snapshot', () => {
    const result = renderJSON(<Image />)

    expect(result).toMatchSnapshot()
  })

  test('with image', () => {
    const result = renderJSON(
      <Image
        src='http://placekitten.com/500'
        width={1 / 2}
        alt=''
      />
    )

    expect(result).toMatchSnapshot()
  })

  test('as selector', () => {
    expect(`${Image}`).toEqual(anyClassName)
  })
})

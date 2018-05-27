import test from 'ava'
import { createTheme, positionProps } from '../src'

const theme = createTheme()

test('props: position', (t) => {
  const result = positionProps({
    theme,
    prl: true,
    pstM: true,
    pabT: false,
    t: true,
    b: false,
    l: 1 / 2,
    x: 1,
    y: true,
    r: 0,
    z: 100,
    zM: 100
  })

  const zIndexFalse = positionProps({ theme, z: false })
  const zIndexTrue = positionProps({ theme, z: true })

  t.snapshot(result)
  t.snapshot(zIndexFalse)
  t.snapshot(zIndexTrue)
})

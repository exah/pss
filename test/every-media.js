import test from 'ava'
import { MEDIA_KEY } from '../src/constants'
import { createTheme, everyMedia } from '../src'

const theme = createTheme({
  [MEDIA_KEY]: {
    D: '(min-width: 601px)',
    M: '(max-width: 600px)'
  }
})

test('run callback for every media in theme', (t) => {
  let i = 0
  everyMedia((mediaKey) => {
    if (theme[MEDIA_KEY].hasOwnProperty(mediaKey)) i++
  }, { theme })

  t.is(i, Object.keys(theme[MEDIA_KEY]).length)
})

test('get styles for every media in theme', (t) => {
  const result = everyMedia((mediaKey) => {
    return mediaKey === 'D' ? null : {
      backgroundColor: mediaKey === 'default' ? 'red' : 'yellow'
    }
  }, { theme })

  t.snapshot(result)
})

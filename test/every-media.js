import test from 'ava'
import { MEDIA_KEY } from '../src/constants'
import { everyMedia } from '../src'
import { toStyles } from './_helpers'

const theme = {
  [MEDIA_KEY]: {
    D: '(min-width: 601px)',
    M: '(max-width: 600px)'
  }
}

test('run callback for every media in theme', (t) => {
  let i = 0
  everyMedia(theme, (mediaKey) => {
    if (theme[MEDIA_KEY].hasOwnProperty(mediaKey)) i++
  })

  t.is(i, Object.keys(theme[MEDIA_KEY]).length)
})

test('get styles for every media in theme', (t) => {
  const result = everyMedia(theme, (mediaKey) => {
    return mediaKey === 'D' ? null : {
      backgroundColor: mediaKey === 'default' ? 'red' : 'yellow'
    }
  })

  t.deepEqual(toStyles(result), {
    backgroundColor: 'red',
    '@media (max-width: 600px)': {
      backgroundColor: 'yellow'
    }
  })
})

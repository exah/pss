import test from 'ava'
import { DEFAULT_THEME as theme } from '../../themes/default'
import { everyMedia } from '../every-media'

test('get styles for every media in theme', (t) => {
  const result = everyMedia((mediaKey) => {
    return mediaKey === 'D' ? null : {
      backgroundColor: mediaKey === 'default' ? 'red' : 'yellow'
    }
  }, { theme })

  t.snapshot(result)
})

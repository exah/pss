import test from 'ava'
import { DEFAULT_THEME as theme } from '../../themes/default'
import { everyMediaStyle } from '../every-media-style'

test('get styles for every media in theme', (t) => {
  const result = everyMediaStyle({ theme }, (mediaKey) => {
    return mediaKey === 'D' ? null : {
      backgroundColor: mediaKey === 'default' ? 'red' : 'yellow'
    }
  })

  t.snapshot(result)
})

import type { CSSObject } from 'pss'
import { Base, Box, Provider } from 'pss-react'

const styles: CSSObject = { color: 'primary', padding: 16 }

export const example = (
  <Provider theme={{ colors: { primary: 'blue' } }}>
    <Box pss={styles}>
      <Base as="button">Submit</Base>
    </Box>
  </Provider>
)

import styled from '@emotion/styled'
import { themePath } from 'pss'
import { Text } from './text'

const Link = styled(Text)(
  themePath('Link')
)

Link.displayName = 'Link'
Link.propTypes = { ...Text.propTypes }
Link.defaultProps = { ...Text.defaultProps, as: 'a' }

export {
  Link
}

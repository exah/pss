import styled from '@emotion/styled'
import { getPropTypes } from 'pss/prop-type'
import { combineStyles, box, boxStyle, themePath } from 'pss'
import { base, omit } from './utils'

const styles = combineStyles(
  boxStyle,
  box
)

const boxDefaultStyles = {
  font: 'inherit',
  color: 'inherit',
  background: 'transparent',
  border: 0,
  margin: 0,
  padding: 0
}

const BaseBox = base({
  name: 'Box',
  filter: omit(styles.props)
})

const Box = styled(BaseBox)(
  { boxSizing: 'border-box' },
  themePath('Box', boxDefaultStyles),
  styles
)

Box.displayName = 'Box'

Box.propTypes = {
  ...BaseBox.propTypes,
  ...getPropTypes(styles)
}

export {
  Box
}

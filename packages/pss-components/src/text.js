import styled from '@emotion/styled'
import { getPropTypes } from 'pss/prop-type'
import { combineStyles, text, textStyle, themePath } from 'pss'
import { Box } from './box'
import { base, omit } from './utils'

const styles = combineStyles(
  textStyle.variant,
  text
)

const BaseText = base({
  use: Box,
  name: 'Text',
  filter: omit(styles.props)
})

const Text = styled(BaseText)(
  themePath('Text'),
  styles
)

Text.displayName = 'Text'

Text.propTypes = {
  ...getPropTypes(styles),
  ...BaseText.propTypes
}

export {
  Text
}

import styled from '@emotion/styled'

import {
  combineStyles,
  gap,
  flexContainer,
  boxContentAlignment,
  boxItemsAlignment,
  themePath
} from 'pss'

import { getPropTypes } from 'pss/prop-type'
import { Box } from './box'

const styles = combineStyles(
  gap,
  flexContainer,
  boxContentAlignment,
  boxItemsAlignment
)

const Flex = styled(Box)(
  themePath('Flex'),
  styles
)

Flex.displayName = 'Flex'
Flex.propTypes = { ...getPropTypes(styles), ...Box.propTypes }
Flex.defaultProps = { ...Box.defaultProps, display: 'flex' }

export {
  Flex
}

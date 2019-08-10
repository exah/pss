import styled from '@emotion/styled'
import pss from 'pss'
import { getPropTypes } from 'pss/prop-type'
import { Box } from './box'
import { base } from './utils'

const listStyle = pss({
  listStyle: true
})

const BaseList = base({
  use: Box,
  name: 'List'
})

const List = styled(BaseList)(
  listStyle
)

List.displayName = 'List'
List.propTypes = { ...getPropTypes(listStyle), ...BaseList.propTypes }
List.defaultProps = { ...BaseList.defaultProps, listStyle: 'none', as: 'ul' }

List.Item = styled(Box)(
  listStyle
)

List.Item.displayName = 'List.Item'
List.Item.propTypes = { ...getPropTypes(listStyle), ...Box.propTypes }
List.Item.defaultProps = { ...Box.defaultProps, as: 'li' }

export {
  List
}

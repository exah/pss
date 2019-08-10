import styled from '@emotion/styled'
import { Flex } from './flex'
import { Box } from './box'

const Layout = styled(Flex)()

Layout.displayName = 'Layout'
Layout.propTypes = { ...Flex.propTypes }
Layout.defaultProps = { ...Flex.defaultProps, flex: '1 1 auto', minWidth: 0 }

const LayoutSide = styled(Box)()

LayoutSide.displayName = 'Layout.Side'
LayoutSide.propTypes = { ...Box.propTypes }
LayoutSide.defaultProps = { ...Box.defaultProps, flex: '0 0 auto', minWidth: 0 }

const LayoutContent = styled(Box)()

LayoutContent.displayName = 'Layout.Content'
LayoutContent.propTypes = { ...Box.propTypes }
LayoutContent.defaultProps = { ...Box.defaultProps, flex: '1 1 auto', minWidth: 0 }

Layout.Side = LayoutSide
Layout.Content = LayoutContent

export {
  Layout
}

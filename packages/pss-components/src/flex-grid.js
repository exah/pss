import PropTypes from 'prop-types'
import { getPropTypes } from 'pss/prop-type'
import React, { forwardRef, useMemo, isValidElement } from 'react'
import styled from '@emotion/styled'
import { DEFAULT_GRID } from './constants'
import { Box } from './box'
import { Flex } from './flex'
import { createFlexGrid, flexGridItem } from './styles'
import { base, omit } from './utils'

const flexGrid = createFlexGrid({
  getRowSelector: () => `& + ${FlexGrid}`,
  getItemSelector: (props) => props.spaceTarget
    ? `& > ${FlexGrid.Item} > ${props.spaceTarget}, & > ${props.spaceTarget}`
    : `& > ${FlexGrid.Item}`
})

flexGrid.propTypes = {
  ...getPropTypes(flexGrid),
  spaceTarget: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string])
}

const FlexGridBase = base({
  use: Flex,
  name: 'FlexGrid',
  filter: omit(flexGrid.props)
})

const FlexGridContainer = forwardRef(({ columns, children, ...rest }, ref) => {
  const clonedChildren = useMemo(() => (
    React.Children
      .toArray(children)
      .map(child =>
        (isValidElement(child) && child.type === FlexGridItem)
          ? React.cloneElement(child, { columns })
          : child
      )
  ), [children])

  return (
    <FlexGridBase ref={ref} {...rest}>
      {clonedChildren}
    </FlexGridBase>
  )
})

FlexGridContainer.displayName = 'FlexGridContainer'

FlexGridContainer.propTypes = {
  columns: PropTypes.number.isRequired,
  ...getPropTypes(flexGrid)
}

FlexGridContainer.defaultProps = {
  columns: DEFAULT_GRID
}

const FlexGrid = styled(FlexGridContainer)(
  { flexWrap: 'wrap' },
  flexGrid
)

FlexGrid.displayName = 'FlexGrid'

FlexGrid.propTypes = {
  ...FlexGridContainer.propTypes,
  ...Flex.propTypes
}

const FlexGridItemBase = base({
  use: Box,
  name: 'FlexGrid.Item',
  filter: omit(flexGridItem.props)
})

const FlexGridItem = styled(FlexGridItemBase)(
  flexGridItem
)

FlexGrid.Item = FlexGridItem
FlexGrid.Item.displayName = 'FlexGrid.Item'
FlexGrid.Item.propTypes = { ...getPropTypes(flexGridItem), ...FlexGridItemBase.propTypes }
FlexGrid.Item.defaultProps = { ...FlexGridItemBase.defaultProps, flex: '0 1 auto', minWidth: 0 }

export {
  FlexGrid
}

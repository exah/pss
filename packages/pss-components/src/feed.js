import PropTypes from 'prop-types'
import React, { forwardRef, useMemo } from 'react'
import styled from '@emotion/styled'
import { fallbackTo, initArr, isNum } from '@exah/utils'
import { DEFAULT_GRID } from './constants'
import { useMatchMediaContext } from './match-media'
import { FlexGrid } from './flex-grid'
import { Box } from './box'
import { omit } from './utils'

const groupChildren = (items = [], length = 3) =>
  items.reduce((target, value, index) => {
    const key = Math.floor(index % length)

    if (target[key]) {
      target[key].push(value)
    }

    return target
  }, initArr(length, () => []))

function useGroupChildren (size, children) {
  return useMemo(() => {
    const childrenArr = React.Children.toArray(children)

    return size > 1
      ? groupChildren(childrenArr, size)
      : childrenArr
  }, [size, children])
}

const FeedContainer = forwardRef(({ children, grid, column, ...rest }, ref) => {
  const mediaKey = useMatchMediaContext().matches.find((key) => column[key])

  const columnForMedia = fallbackTo(
    column[mediaKey],
    column.all,
    isNum(column) ? column : grid
  )

  const childrenGroups = useGroupChildren(grid / columnForMedia, children)

  return (
    <FlexGrid ref={ref} spaceTarget={Feed.Item} {...rest} columns={grid}>
      {childrenGroups.map((child, index) => (
        <FlexGrid.Item key={index} column={columnForMedia}>
          {child}
        </FlexGrid.Item>
      ))}
    </FlexGrid>
  )
})

FeedContainer.displayName = 'Feed'

FeedContainer.propTypes = {
  grid: PropTypes.number.isRequired,
  column: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.objectOf(PropTypes.number)
  ]).isRequired,
  ...omit(['columns'])(FlexGrid.propTypes)
}

FeedContainer.defaultProps = {
  grid: DEFAULT_GRID,
  column: DEFAULT_GRID
}

const Feed = styled(FeedContainer)()

Feed.propTypes = { ...FeedContainer.propTypes }

const FeedItem = styled(Box)()

Feed.Item = FeedItem
Feed.Item.displayName = 'Feed.Item'

export {
  Feed
}

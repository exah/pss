import React from 'react'
import PropTypes from 'prop-types'
import isPropValid from '@emotion/is-prop-valid'
import { filterObj, isStr, identity, pipe } from '@exah/utils'

export const omit = (blacklist = []) => filterObj((key) => !blacklist.includes(key))

const dedupe = (input = []) =>
  input.filter((item, index) => input.indexOf(item) === index)

const dedupeClassName = (input = '') =>
  dedupe(input.split(' ')).join(' ')

export function base ({
  as: defaultElement = 'div',
  use: BaseComp,
  filter = identity,
  name
} = {}) {
  const strictFilter = pipe(filter, filterObj(isPropValid))

  const Base = React.forwardRef((props, ref) => {
    const {
      as: Element = defaultElement,
      base: Comp = Element,
      className,
      ...rest
    } = props

    if (isStr(Comp)) {
      return (
        <Comp
          ref={ref}
          className={dedupeClassName(className)}
          {...strictFilter(rest)}
        />
      )
    }

    return (
      <Comp
        ref={ref}
        as={Element === Comp ? undefined : Element}
        className={className}
        {...filter(rest)}
      />
    )
  })

  Base.displayName = name ? `Base(${name})` : 'Base'

  Base.propTypes = {
    className: PropTypes.string,
    as: PropTypes.elementType,
    ...BaseComp !== undefined && {
      base: PropTypes.elementType,
      ...BaseComp.propTypes
    }
  }

  Base.defaultProps = {
    as: defaultElement,
    base: BaseComp
  }

  return Base
}

import { rule, createStyles, combineStyles, mediaStyle } from '../core'
import { positionRule, sizeRule } from '../rules'
import { boolValue } from '../values'
import { colors } from './colors'
import { space } from './space'

/**
 * ```js
 * import { atomicSizes } from 'pss'
 * ```
 *
 * - `w` → `width`
 * - `maxw` → `max-width`
 * - `minw` → `min-width`
 * - `h` → `height`
 * - `maxh` → `max-height`
 * - `minh` → `min-height`
 *
 * See {@link sizes} for docs.
 * Related: {@link sizeValue}, {@link space}.
 *
 * @param {Object} props
 *
 * @example
 * import { atomicSizes } from 'pss'
 *
 * const Box = styled.div`
 *   ${atomicSizes}
 * `
 *
 * @example
 * <Box w h /> // width: 100%; height: 100%;
 */

export const atomicSizes = createStyles({
  h: sizeRule('height'),
  w: sizeRule('width'),
  maxw: sizeRule('maxWidth'),
  maxh: sizeRule('maxHeight'),
  minh: sizeRule('minHeight'),
  minw: sizeRule('minWidth')
})

/**
 * ```js
 * import { atomicPosition } from 'pss'
 * ```
 *
 * prop  | css          | type                            | value    | true       | false
 * :-----|:-------------|:--------------------------------|:---------|:-----------|:--------
 * `prl` | `position`   | `Boolean`, key in `theme.media` | mediaKey | `relative` | —
 * `pab` | `position`   | `Boolean`, key in `theme.media` | mediaKey | `absolute` | —
 * `pfx` | `position`   | `Boolean`, key in `theme.media` | mediaKey | `fixed`    | —
 * `psy` | `position`   | `Boolean`, key in `theme.media` | mediaKey | `sticky`   | —
 * `pst` | `position`   | `Boolean`, key in `theme.media` | mediaKey | `static`   | —
 *
 * Related: {@link position}, {@link mediaStyle}.
 *
 * @param {Object} props
 *
 * @example
 * import { atomicPosition } from 'pss'
 *
 * const Box = styled.div`
 *   ${atomicPosition}
 * `
 *
 * @example
 * <Box prl /> // position: relative;
 * <Box pab='sm' /> // @media (max-width: 600px) { position: absolute; }
 */

export const atomicPosition = createStyles({
  pab: mediaStyle({ position: 'absolute' }),
  prl: mediaStyle({ position: 'relative' }),
  pfx: mediaStyle({ position: 'fixed' }),
  psy: mediaStyle({ position: 'sticky' }),
  pst: mediaStyle({ position: 'static' })
})

/**
 * ```js
 * import { atomicPositionOffset } from 'pss'
 * ```
 *
 * prop  | css                        | type                          | value | true       | false
 * :-----|:---------------------------|:------------------------------|:------|:-----------|:--------
 * `l`   | `left`                     | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `r`   | `right`                    | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `t`   | `top`                      | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `b`   | `bottom`                   | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `x`   | `left`, `right`            | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `y`   | `top`, `bottom`            | `String`, `Number`, `Boolean` | ✓     | `0`        | `auto`
 * `z`   | `z-index`                  | `String`, `Number`, `Boolean` | ✓     | `1`        | `auto`
 *
 * Related: {@link rule}, {@link boolValue}, {@link sizeValue}.
 *
 * @param {Object} props
 *
 * @example
 * import { atomicPositionOffset } from 'pss'
 *
 * const Box = styled.div`
 *   position: absolute;
 *   ${atomicPositionOffset}
 * `
 *
 * @example
 * <Box t={0.2} l={0} /> // position: absolute; top: 20%; left: 0
 * <Box x y /> // position: absolute; top: 0; left: 0; right: 0; bottom: 0;
 */

export const atomicPositionOffset = createStyles({
  t: positionRule('top'),
  l: positionRule('left'),
  r: positionRule('right'),
  b: positionRule('bottom'),
  x: [ positionRule('left'), positionRule('right') ],
  y: [ positionRule('top'), positionRule('bottom') ],
  z: rule('zIndex', boolValue(1, 'auto'))
})

/**
 * ```js
 * import { atomicDisplay } from 'pss'
 * ```
 *
 * prop   | css                      | type                 | value    | true      | false
 * :------|:-------------------------|:---------------------|:---------|:--------- |:--------
 * `d`    | [`display`][display-url] | `String`, `Boolean`  | ✓        | `initial` | `none`
 * `hide` | `display: none`          | key in `theme.media` | mediaKey | —         | —
 *
 * Related: {@link display}, {@link boolValue}, {@link rule}, {@link mediaStyle}.
 *
 * @param {Object} props
 *
 * @example
 * import { atomicDisplay } from 'pss'
 *
 * const Box = styled.div`
 *   ${atomicDisplay}
 * `
 *
 * @example
 * <Box d='inline-block' hide='sm' />
 * // display: inline-block; @media (max-width: 600px) { display: none }
 */

export const atomicDisplay = createStyles({
  d: rule('display', boolValue('initial', 'none')),
  hide: mediaStyle({ display: 'none' })
})

/**
 * ```js
 * import { atomic } from 'pss'
 * ```
 *
 * Combination of
 *   - {@link space}
 *   - {@link colors}
 *   - {@link atomicSizes}
 *   - {@link atomicPosition}
 *   - {@link atomicPositionOffset}
 *   - {@link atomicDisplay}
 *   - {@link atomicFlexItem}
 *
 * Related: {@link combineStyles}.
 *
 * @param {Object} props
 */

export const atomic = combineStyles(
  space,
  colors,
  atomicSizes,
  atomicPosition,
  atomicPositionOffset,
  atomicDisplay
)

import { rule, createStyles, createRule, mediaStyle } from '../core'
import { sizeRule } from '../rules'
import { boolValue, themeValue } from '../values'
import { overflowValue } from './overflow'

const atomicPositionRule = (name) => sizeRule(name, boolValue(0))
const atomicSizeRule = (name) => sizeRule(name, boolValue('100%'))

/**
 * ```js
 * import { atomic } from 'pss'
 * ```
 *
 * First version of `pss` is different, most of the styles applied with short flags.
 * Now this variants considered as bad practice as it introduce new syntax to rembember.
 * But sometimes it can be useful to have short variants and can speed-up development process.
 *
 *
 * prop  | css                  | theme   | value                  | default
 * :-----|:---------------------|:--------|:-----------------------|:-----------
 * `d`   | `display`            | —       | ✓                      | —
 * `f`   | `flex`               | —       | ✓                      | —
 * `o`   | `order`              | —       | ✓                      | —
 * `prl` | `position: relative` | `media` | key from `theme.media` | appy style
 * `pab` | `position: absolute` | `media` | key from `theme.media` | appy style
 * `pfx` | `position: fixed`    | `media` | key from `theme.media` | appy style
 * `psy` | `position: sticky`   | `media` | key from `theme.media` | appy style
 * `pst` | `position: static`   | `media` | key from `theme.media` | appy style
 * `l`   | `left`               | `sizes` | ✓                      | `0`
 * `r`   | `right`              | `sizes` | ✓                      | `0`
 * `t`   | `top`                | `sizes` | ✓                      | `0`
 * `b`   | `bottom`             | `sizes` | ✓                      | `0`
 * `x`   | `left`, `right`      | `sizes` | ✓                      | `0`
 * `y`   | `top`, `bottom`      | `sizes` | ✓                      | `0`
 * `z`   | `z-index`            | `zIndex`| ✓                      | `1`
 * `w`   | `width`              | `sizes` | ✓                      | `100%`
 * `h`   | `height`             | `sizes` | ✓                      | `100%`
 * `minw`| `min-width`          | `sizes` | ✓                      | `100%`
 * `minh`| `min-height`         | `sizes` | ✓                      | `100%`
 * `maxw`| `max-width`          | `sizes` | ✓                      | `100%`
 * `maxh`| `max-height`         | `sizes` | ✓                      | `100%`
 * `ov`  | {@link overflow}     | —       | ✓                      | `auto`
 *
 * Related {@link space}, {@link colors}, {@link hide}.
 *
 * @param {Object} props
 *
 * @example
 * import { atomic } from 'pss'
 *
 * const Box = styled.div`
 *   ${atomic}
 * `
 *
 * @example
 * <Box d='inline-block' /> // → display: inline-block;
 *
 * @example
 * <Box d='flex'> // → display: inline-block;
 *   <Box f='1' o='1'> // → flex: 1; order: 1
 *      Second
 *   </Box>
 *   <Box>
 *    First
 *   </Box>
 * </Box>
 *
 * @example
 * <Box w h /> // → width: 100%; height: 100%;
 * <Box minw={1 / 4} /> // → min-width: 25%
 *
 * @example
 * <Box prl /> // → position: relative;
 * <Box pab='sm' /> // → @media (max-width: 600px) { position: absolute; }
 *
 * @example
 * <Box t={0.2} l={0} /> // → position: absolute; top: 20%; left: 0
 * <Box x y /> // → position: absolute; top: 0; left: 0; right: 0; bottom: 0;
 *
 * @example
 * <Box ov='auto touch' /> // → overflow: auto; -webkit-overflow-scrolling: touch
 */

export const atomic = createStyles({
  d: rule('display'),
  f: rule('flex'),
  o: rule('order'),
  pab: mediaStyle({ position: 'absolute' }),
  prl: mediaStyle({ position: 'relative' }),
  pfx: mediaStyle({ position: 'fixed' }),
  psy: mediaStyle({ position: 'sticky' }),
  pst: mediaStyle({ position: 'static' }),
  t: atomicPositionRule('top'),
  l: atomicPositionRule('left'),
  r: atomicPositionRule('right'),
  b: atomicPositionRule('bottom'),
  x: [ atomicPositionRule('left'), atomicPositionRule('right') ],
  y: [ atomicPositionRule('top'), atomicPositionRule('bottom') ],
  z: rule('zIndex', boolValue(1, null, themeValue({ themeKey: 'zIndex' }))),
  w: atomicSizeRule('width'),
  h: atomicSizeRule('height'),
  minw: atomicSizeRule('minWidth'),
  minh: atomicSizeRule('minHeight'),
  maxw: atomicSizeRule('maxWidth'),
  maxh: atomicSizeRule('maxHeight'),
  ov: createRule({ getValue: boolValue('auto', null, overflowValue) })
})

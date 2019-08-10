import parsePropTypes from 'parse-prop-types'
import { mapObj } from '@exah/utils'

export const parse = (Comp) => Comp.propTypes == null ? null : (
  parsePropTypes({
    propTypes: Comp.propTypes,
    defaultProps: mapObj(
      (key, value) => ({ [key]: value }),
      Object(Comp.defaultProps)
    )
  })
)

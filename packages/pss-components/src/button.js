import styled from '@emotion/styled'
import { themePath, variant } from 'pss'
import { getPropTypes } from 'pss/prop-type'
import { Box } from './box'

const buttonStyle = variant({
  themeKey: 'buttonStyle'
})

const Button = styled(Box)(
  {
    appearance: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    '&[disabled]': {
      cursor: 'auto',
      pointerEvents: 'none'
    }
  },
  themePath('Button'),
  buttonStyle
)

Button.displayName = 'Button'

Button.propTypes = {
  ...getPropTypes(buttonStyle),
  ...Box.propTypes
}

Button.defaultProps = {
  as: 'button',
  display: 'inline-block'
}

export {
  Button
}

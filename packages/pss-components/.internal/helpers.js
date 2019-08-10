import renderer from 'react-test-renderer'
import expect from 'expect'

export const renderJSON = (element) =>
  renderer.create(element).toJSON()

export const anyClassName = expect.stringMatching(/^\./)

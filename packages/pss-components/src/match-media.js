import PropTypes from 'prop-types'
import React, { createContext, useEffect, useState, useContext, useMemo } from 'react'
import { reduceObj } from '@exah/utils'
import { useTheme } from './theme'

function listenForChanges (target, fn) {
  fn()

  target.addListener(fn)
  return () => target.removeListener(fn)
}

const DEFAULT_MEDIA = {}
const INITIAL = { matches: [] }

const MatchMediaContext = createContext(INITIAL)
const { Provider, Consumer: MatchMediaConsumer } = MatchMediaContext

function useMatchMedia (media = DEFAULT_MEDIA) {
  const [matches, setMatches] = useState(INITIAL.matches)

  useEffect(() => {
    const listeners = reduceObj((acc, mediaKey, query) => {
      const mql = window.matchMedia(query)

      const listener = () => setMatches((prev) =>
        mql.matches
          ? [mediaKey, ...prev]
          : prev.filter((item) => item !== mediaKey)
      )

      return [...acc, listenForChanges(mql, listener)]
    }, [], media)

    return () => listeners.map((fn) => fn())
  }, [media])

  return matches
}

function MatchMediaProvider (props) {
  const theme = useTheme()
  const matches = useMatchMedia(props.media || theme.media)
  const value = useMemo(() => ({ matches }), [matches])

  return (
    <Provider value={value}>
      {props.children}
    </Provider>
  )
}

MatchMediaProvider.propTypes = {
  media: PropTypes.objectOf(PropTypes.string)
}

function useMatchMediaContext () {
  return useContext(MatchMediaContext)
}

const withMatchMedia = (Comp) => (props) => (
  <MatchMediaConsumer>
    {(matchMedia) => <Comp matchMedia={matchMedia} {...props} />}
  </MatchMediaConsumer>
)

export {
  MatchMediaContext,
  MatchMediaProvider,
  MatchMediaConsumer,
  useMatchMedia,
  useMatchMediaContext,
  withMatchMedia
}

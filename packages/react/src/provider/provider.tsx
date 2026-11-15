import { ThemeProvider } from '@emotion/react'

interface ProviderProps<T> {
  theme: T
  children?: React.ReactNode
}

export const Provider = <T extends {}>(props: ProviderProps<T>) => (
  <ThemeProvider {...props} />
)

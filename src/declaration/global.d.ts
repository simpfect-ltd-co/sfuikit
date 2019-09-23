declare module 'styled-components'
declare module 'sfuikit'

declare interface Window {
  prefs: any
  counter: number
  setViewState: (key: string, value: any) => void
  getViewState: (key: string) => any
}

declare let setViewState: (key: string, value: any) => void
declare let getViewState: (key: string) => any

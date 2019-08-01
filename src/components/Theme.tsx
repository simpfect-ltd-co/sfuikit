import * as React from 'react'
import { ThemeProvider } from 'styled-components'
export const ThemeDataContext = React.createContext({})
window.prefs = {}

window.setViewState = (key: string, value: any) => {
  window.prefs[key] = value
}

window.getViewState = (key: string) => {
  return window.prefs[key]
}

const onDataChange = (o: any, callback: any) => {
  return new Proxy(o, {
    set(obj: any, prop: string, value: any) {
      callback(prop, value)
      obj[prop] = value
      return true
    }
  })
}

export default class Theme extends React.Component {
  state = {
    ctx: this,
    ...window.prefs
  }

  componentDidMount() {
    window.prefs = onDataChange(window.prefs, (prop: any, val: any) => {
      this.setState({
        [prop]: val
      })
    })
  }

  render() {
    return (
      <ThemeDataContext.Provider value={this.state}>
        <ThemeProvider theme={colors}>{this.props.children}</ThemeProvider>
      </ThemeDataContext.Provider>
    )
  }
}
export const ThemeValueProvider = (props: any) => {
  return props.children(colors)
}
const colorTealBlue = {
  primary: '#009688',
  dark_primary: '#00796B',
  light_primary: '#B2DFDB',
  inverted_text: '#FFFFFF',
  accent: '#448AFF',
  pink: '#E91E63',
  orange: '#FF9800',
  amber: '#ffc107',
  light_purple: '#ba68c8',
  primary_text: '#212121',
  secondary_text: '#757575',
  divider: '#BDBDBD',
  yellow: '#ffeb3b'
}

export const colors = {
  ...colorTealBlue,
  teal: '#009688',
  purple: '#7E57C2',
  red: '#F44336',
  card: '#FFF',
  grey: '#e0e0e0',
  light_red: '#EF9A9A',
  shadow_level_2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  shadow_level_3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  shadow_level_1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  shadow_level_4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  shadow_level_5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
}

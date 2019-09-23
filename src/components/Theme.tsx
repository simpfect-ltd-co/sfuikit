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

export default class Theme extends React.Component<UI.ThemeProps> {
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

  componentWillUnmount() {
    window.prefs = {}
  }

  render() {
    return (
      <ThemeDataContext.Provider value={this.state}>
        <ThemeProvider theme={this.props.values ? this.props.values : colors}>
          {this.props.children}
        </ThemeProvider>
      </ThemeDataContext.Provider>
    )
  }
}
export const ThemeValueProvider = (props: any) => {
  return props.children(colors)
}

export const colors = {
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
  yellow: '#ffeb3b',
  teal: '#009688',
  purple: '#7E57C2',
  red: '#F44336',
  card: '#FFF',
  grey: '#e0e0e0',
  light_grey: '#eeeeee',
  light_red: '#EF9A9A',
  dark_background: {
    0: '#616161',
    1: '#9e9e9e',
    2: '#757575',
    3: '#616161',
    4: '#424242',
    5: '#212121'
  },
  bright_color: {
    5: '#FAFAFA',
    4: '#F5F5F5',
    3: '#EEEEEE',
    2: '#E0E0E0',
    1: '#BDBDBD',
    0: '#EEEEEE'
  },
  shadow_level_1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  shadow_level_2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  shadow_level_3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  shadow_level_4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  shadow_level_5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',

  dark_shadow_level_1: '0 1px 3px rgba(0,0,0,0.88), 0 1px 2px rgba(0,0,0,0.76)',
  dark_shadow_level_2: '0 3px 6px rgba(0,0,0,0.84), 0 3px 6px rgba(0,0,0,0.77)',
  dark_shadow_level_3:
    '0 10px 20px rgba(0,0,0,0.81), 0 6px 6px rgba(0,0,0,0.77)',
  dark_shadow_level_4:
    '0 14px 28px rgba(0,0,0,0.75), 0 10px 10px rgba(0,0,0,0.78)',
  dark_shadow_level_5:
    '0 19px 38px rgba(0,0,0,0.70), 0 15px 12px rgba(0,0,0,0.78)'
}

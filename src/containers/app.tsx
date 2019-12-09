import * as React from 'react'
import * as UI from 'components'
import { colors } from '../components/Theme'

export default class Main extends React.Component {
  render() {
    return (
      <UI.Theme values={{ darkmode: false, ...colors }}>
        <UI.View padding="20px" dark-background-level={4}>
          <UI.DatePicker bind="jskdlfjsd" sync></UI.DatePicker>
          <UI.Input bind="ok" type="number" sync></UI.Input>
          <UI.Input bind="ok" sync></UI.Input>
          <UI.Input bind="jskdlfjsd" sync></UI.Input>
        </UI.View>
      </UI.Theme>
    )
  }
}

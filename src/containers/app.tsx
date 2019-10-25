import * as React from 'react'
import * as UI from 'components'
import { colors } from '../components/Theme'

export default class Main extends React.Component {
  render() {
    return (
      <UI.Theme values={{ darkmode: true, ...colors }}>
        <UI.View padding="20px" dark-background-level={4}>
          <UI.DatePicker bind="jskdlfjsd"></UI.DatePicker>
          <UI.Input variant="multiline" bind="ok" sync></UI.Input>
          <UI.Text bind="ok" sync bindValueKey="children"></UI.Text>
          <UI.Button type="text" variant="accent">
            {' '}
            Hello
          </UI.Button>
        </UI.View>
      </UI.Theme>
    )
  }
}

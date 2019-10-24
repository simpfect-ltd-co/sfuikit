import * as React from 'react'
import * as UI from 'components'
import { colors } from '../components/Theme'

export default class Main extends React.Component {
  render() {
    return (
      <UI.Theme values={{ darkmode: true, ...colors }}>
        <UI.View>
          <UI.DatePicker bind="jskdlfjsd"></UI.DatePicker>
        </UI.View>
      </UI.Theme>
    )
  }
}

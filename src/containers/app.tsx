import * as React from 'react'
import * as UI from 'components'
import { colors } from '../components/Theme'

export default class Main extends React.Component {
  state = { value: 1 }
  render() {
    return (
      <UI.Theme values={{ darkmode: false, ...colors }}>
        <UI.View padding="20px" dark-background-level={4}>
          <UI.DatePicker bind="jskdlfjsd"></UI.DatePicker>
          <UI.Input bind="ok" type="number" sync></UI.Input>
          <UI.Text bind="ok" sync bindValueKey="children"></UI.Text>
          <UI.ThemeValueProvider>
            {(theme: any) => (
              <UI.Button type="text" background={theme.red + ' !important'}>
                {' '}
                Hello
              </UI.Button>
            )}
          </UI.ThemeValueProvider>
          <UI.Select
            options={array1}
            value={this.state.value}
            onChange={(value: any) => this.setState({ value })}
            popupStyle={(theme: any) =>
              `background: ${theme.red}; height: 200px; padding:20px;`
            }
          />
        </UI.View>
      </UI.Theme>
    )
  }
}

const array1 = [
  { label: 'label 1', value: 1 },
  { label: 'label 2', value: 2 },
  { label: 'label 3', value: 3 },
  { label: 'label 4', value: 4 },
  { label: 'label 5', value: 5 },
  { label: 'label 6', value: 6 },
  { label: 'label 7', value: 7 },
  { label: 'label 8', value: 8 },
  { label: 'label 9', value: 9 },
  { label: 'label 10', value: 10 }
]

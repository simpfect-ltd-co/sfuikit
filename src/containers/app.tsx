import * as React from 'react'
import * as UI from 'components'
import { colors } from '../components/Theme'

export default class Main extends React.Component {
  state = { value: '' }
  render() {
    return (
      <UI.Theme values={{ darkmode: false, ...colors }}>
        <UI.View padding="20px" dark-background-level={4}>
          <UI.DatePicker bind="jskdlfjsd" sync></UI.DatePicker>
          <UI.Input bind="ok" type="number" sync></UI.Input>
          <UI.Input bind="ok" sync></UI.Input>
          <UI.Input bind="jskdlfjsd" sync></UI.Input>
          <UI.ThemeValueProvider>
            {(theme: any) => (
              <UI.Button
                type="text"
                background={theme.red + ' !important'}
                onClick={() => {
                  UI.setViewState('modal-open', true)
                }}
              >
                Hello
              </UI.Button>
            )}
          </UI.ThemeValueProvider>
          <UI.Input
            value={this.state.value}
            onChange={(val: any) => {
              this.setState({ value: val })
            }}
          />
          <UI.Modal
            open={true}
            bind="modal-open"
            bindValueKey="open"
            onClick={() => UI.setViewState('modal-open', false)}
          >
            <UI.View
              width="300"
              height="300"
              background="white"
              onClick={(e: any) => e.stopPropagation()}
            >
              {console.log('prefs', window.prefs)}
              <UI.Input label="Label" bind="input-value" sync />
              <UI.Text>ABCD2</UI.Text>
              <UI.Input bind="ok" sync></UI.Input>
              <UI.Input bind="jskdlfjsd" sync></UI.Input>
              <UI.Input
                value={this.state.value}
                onChange={(val: any) => {
                  this.setState({ value: val })
                }}
              />
            </UI.View>
          </UI.Modal>
        </UI.View>
      </UI.Theme>
    )
  }
}

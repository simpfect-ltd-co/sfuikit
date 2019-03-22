import * as React from 'react'
import * as UI from 'components'
export default class Main extends React.Component {
  state = {
    value: false,
    inputText: ''
  }
  render() {
    return (
      <UI.Theme>
        <UI.ThemeValueProvider>
          {(colors: any) => (
            <UI.View>
              <UI.View
                flex-direction="row"
                align-items="center"
                justify-content="space-between"
                height="54px"
                width="100%"
                background={'white'}
                box-shadow={colors.shadow_level_2}
              >
                <UI.View flex-direction="row" align-items="center">
                  <UI.Icon name="menu" padding="15 10" />
                  <UI.Text>Dashboard</UI.Text>
                </UI.View>

                <UI.Switch
                  value={this.state.value}
                  padding="15"
                  primaryColor={colors.primary}
                  secondaryColor={colors.light_primary}
                  onChange={(value: boolean) => {
                    this.setState({ value })
                  }}
                />
              </UI.View>
              <UI.Text>MATERIAL-UI</UI.Text>
              <UI.Input
                placeholder="Placeholder"
                value={this.state.inputText}
                onChange={val => this.setState({ inputText: val })}
              />
            </UI.View>
          )}
        </UI.ThemeValueProvider>
      </UI.Theme>
    )
  }
}

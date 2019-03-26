import * as React from 'react'
import * as UI from 'components'
import { MultilineInput } from 'components/Input'
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
                  padding="30"
                  primaryColor={colors.primary}
                  secondaryColor={colors.light_primary}
                  onChange={(value: boolean) => {
                    this.setState({ value })
                  }}
                />
              </UI.View>
              <UI.Text>MATERIAL-UI</UI.Text>
              <UI.Text>
                {this.state.inputText ? this.state.inputText : 'Not value'}
              </UI.Text>
              <UI.Input
                // disabled
                // plain
                width="300"
                // background="red"
                font-size="40"
                color-mobile="red"
                variant="disabled"
                // padding="40"
                // type="number"
                placeholder="Placeholder"
                value={this.state.inputText}
                onChange={val => this.setState({ inputText: val })}
              />
              {/* <UI.Input
                variant="plain"
                font-size="32"
                placeholder="Placeholder"
                value={this.state.inputText}
                onChange={val => this.setState({ inputText: val })}
              />
              <UI.Input
                font-size="16"
                placeholder="Placeholder"
                value={this.state.inputText}
                onChange={val => this.setState({ inputText: val })}
              />
              <MultilineInput
                // padding="20"
                // background="blue"
                placeholder="Placeholder"
                value={this.state.inputText}
                onChange={val => this.setState({ inputText: val })}
              />
              <textarea
                placeholder="Placeholder"
                rows={5}
                style={{ background: 'red' }}
              /> */}
            </UI.View>
          )}
        </UI.ThemeValueProvider>
      </UI.Theme>
    )
  }
}

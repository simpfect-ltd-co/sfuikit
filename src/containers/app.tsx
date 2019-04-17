import * as React from 'react'
import * as UI from 'components'
import UIList from 'components/List'
import UIGrid from 'components/Grid'
import Theme from 'components/Theme'
import UIInput from 'components/Input'
// import * as UI from 'components'
export default class Main extends React.Component {
  state = {
    value: false,
    text: '',
    selectValue: 'mot',
    selectValues: ['mot', 'hai']
  }
  render() {
    return (
      <UI.Theme>
        <UI.ThemeValueProvider>
          {(colors: any) => (
            <UI.View height="100%" width="100%" padding="10">
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
                  <UI.Text font-size="17px">Dashboard</UI.Text>
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
              <UI.Input label="hellos" />
              <UI.Text font-size="20" padding="15">
                Modal Demo
              </UI.Text>
              <UI.Modal
                open={this.state.value}
                onClick={(e: any) => {
                  this.setState({ value: !this.state.value })
                }}
              >
                <UI.View
                  width="200"
                  height="300"
                  background="white"
                  border-radius="3px"
                  width-mobile="300"
                  onClick={(e: any) => {
                    e.stopPropagation()
                  }}
                >
                  Hello world
                </UI.View>
              </UI.Modal>
            </UI.View>
          )}
        </UI.ThemeValueProvider>
      </UI.Theme>
    )
  }
}

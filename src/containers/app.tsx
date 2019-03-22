import * as React from 'react'
import * as UI from 'components'
export default class Main extends React.Component {
  state = {
    value: false
  }
  render() {
    return (
      <UI.Theme>
        <UI.ThemeValueProvider>
          {(colors: any) => (
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
          )}
        </UI.ThemeValueProvider>
      </UI.Theme>
    )
  }
}

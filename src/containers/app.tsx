import * as React from 'react'
import * as UI from 'components'
import UIList from 'components/List'
import UIGrid from 'components/Grid'
import Theme from 'components/Theme'
import UIInput from 'components/Input'
export default class Main extends React.Component {
  state = {
    value: false,
    text: 'jk'
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
              <UI.Text font-size="20" padding="15">
                List Demo
              </UI.Text>
              <UI.View width="100%" height="auto">
                <UIList items={[1, 2, 3]} padding="10">
                  {(item, ind) => (
                    <UI.View
                      align-items="center"
                      justify-content="center"
                      height="50px"
                      margin="10"
                      box-shadow={colors.shadow_level_2}
                      background={ind % 2 == 0 ? colors.accent : ''}
                      color={ind % 2 == 0 ? 'white' : ''}
                    >
                      {item}
                    </UI.View>
                  )}
                </UIList>
                <UI.Text font-size="20" padding="15">
                  This Grid can be responsive, try mobile view
                </UI.Text>
                <UIGrid
                  items={[1, 2, 3]}
                  column={2}
                  column-mobile={1}
                  padding="10"
                >
                  {(item, ind) => (
                    <UI.View
                      align-items="center"
                      justify-content="center"
                      height="50px"
                      margin="10"
                      background-mobile={colors.primary}
                      box-shadow={colors.shadow_level_2}
                      color-mobile="white"
                    >
                      {item}
                    </UI.View>
                  )}
                </UIGrid>
                <UI.Text font-size="20" padding="15">
                  UI Input demo
                </UI.Text>
                <UIInput
                  label="hihi"
                  placeholder="nice placeholder"
                  value={this.state.text}
                  variant="multiline"
                  width="300px"
                  min-height="500px"
                  onChange={value => {
                    this.setState({ text: value })
                  }}
                />
              </UI.View>
            </UI.View>
          )}
        </UI.ThemeValueProvider>
      </UI.Theme>
    )
  }
}

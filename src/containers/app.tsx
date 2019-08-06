import * as React from 'react'
import * as UI from 'components'

export default class Main extends React.Component {
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
                <UI.Switch bind="test1" defaultValue={true} />
                <UI.Toggle bind="test2" bindValueKey="isOpen">
                  <UI.Switch
                    bind="test3"
                    padding="15"
                    primaryColor={colors.primary}
                    secondaryColor={colors.light_primary}
                    defaultValue={false}
                  />
                </UI.Toggle>
                <UI.Button>jksdlf</UI.Button>
              </UI.View>
            </UI.View>
          )}
        </UI.ThemeValueProvider>
      </UI.Theme>
    )
  }
}

import * as React from 'react'
import * as UI from 'components'
import { colors } from '../components/Theme'

export default class Main extends React.Component {
  render() {
    return (
      <UI.Theme values={{ darkmode: true, ...colors }}>
        <UI.ThemeValueProvider>
          {(colors: any) => (
            <UI.View height="100%" width="100%" dark-background-level={5}>
              <UI.View
                flex-direction="row"
                align-items="center"
                justify-content="space-between"
                height="54px"
                width="100%"
                dark-background-level={4}
                box-shadow={colors.shadow_level_1}
              ></UI.View>
              <UI.View>
                <UI.Text>Hello world</UI.Text>
                <UI.Input placeholder="hihi"></UI.Input>
                <UI.Input placeholder="hello" variant="multiline"></UI.Input>
                <UI.Icon name="edit"></UI.Icon>
              </UI.View>
            </UI.View>
          )}
        </UI.ThemeValueProvider>
      </UI.Theme>
    )
  }
}

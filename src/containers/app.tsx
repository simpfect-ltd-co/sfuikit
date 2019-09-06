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
                <UI.Input label="test" placeholder="hihi"></UI.Input>
                <UI.Input
                  placeholder="hello"
                  label="fuck you "
                  variant="multiline"
                ></UI.Input>
                <UI.Icon name="edit"></UI.Icon>
                <UI.Button type="text">Hello</UI.Button>
                <UI.Button type="outline">Outlien</UI.Button>
                <UI.Select
                  options={[
                    {
                      label: 'hello',
                      value: 'hahah'
                    }
                  ]}
                  bind="shit"
                ></UI.Select>
                <UI.GridMultipleSelect
                  options={[
                    {
                      label: 'hello',
                      value: 'hahah'
                    }
                  ]}
                  bind="shit22"
                ></UI.GridMultipleSelect>

                <UI.Toggle isOpen={true}>
                  <UI.Text> ajskldfjalskdf</UI.Text>
                </UI.Toggle>

                <UI.DatePicker value="2019-01-01"></UI.DatePicker>
              </UI.View>
            </UI.View>
          )}
        </UI.ThemeValueProvider>
      </UI.Theme>
    )
  }
}

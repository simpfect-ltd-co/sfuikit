import * as React from 'react'
import * as UI from 'components'
import { colors } from '../components/Theme'

export default class Main extends React.Component {
  render() {
    return (
      <UI.Theme values={{ colors }}>
        <UI.ThemeValueProvider>
          {(colors: any) => (
            <UI.View height="100%" width="100%" dark-background-level={4}>
              <UI.View
                flex-direction="row"
                align-items="center"
                justify-content="space-between"
                height="54px"
                width="100%"
                dark-background-level={3}
                box-shadow={colors.shadow_level_1}
              ></UI.View>
              <UI.View>
                <UI.Text
                  bindValueKey="children"
                  handleData={(value: any) => {
                    return value[0].label
                  }}
                >
                  Hello world
                </UI.Text>
                <UI.Input label="test" type="number" bind="shittt"></UI.Input>
                <UI.Input
                  placeholder="hello"
                  label="fuck you "
                  bind="holy"
                  variant="multiline"
                ></UI.Input>
                <UI.Icon name="edit"></UI.Icon>
                <UI.Button type="text" onClick={() => {}}>
                  Hello
                </UI.Button>
                <UI.Button type="outline" onClick={() => {}}>
                  Outline
                </UI.Button>
                <UI.Select
                  label="hehe"
                  options={[
                    {
                      label: 'hello',
                      value: 'hahah'
                    }
                  ]}
                  bind="shit"
                ></UI.Select>
                <UI.MultipleSelect
                  label="hehe"
                  options={[
                    {
                      label: 'hello',
                      value: 'hahah'
                    },
                    {
                      label: 'hell1o',
                      value: 'hahah2'
                    },
                    {
                      label: 'hell3o',
                      value: 'hahah4'
                    }
                  ]}
                  bind="shit4"
                ></UI.MultipleSelect>
                <UI.GridMultipleSelect
                  label="hoho"
                  options={[
                    {
                      label: 'hello',
                      value: 'hahah'
                    }
                  ]}
                  handleData={(values: any) => {
                    console.log('jskldf', values[0])
                    return values
                  }}
                ></UI.GridMultipleSelect>

                <UI.Toggle isOpen={true}>
                  <UI.Text> ajskldfjalskdf</UI.Text>
                </UI.Toggle>

                <UI.DatePicker
                  dark-style={(theme: any) => `
                
                & [data-component='text-date'] {
                  color: red;
                }`}
                ></UI.DatePicker>
              </UI.View>
            </UI.View>
          )}
        </UI.ThemeValueProvider>
      </UI.Theme>
    )
  }
}

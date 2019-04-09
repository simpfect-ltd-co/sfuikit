import * as React from 'react'
import * as UI from 'components'
import UIList from 'components/List'
import UIGrid from 'components/Grid'
import Theme from 'components/Theme'
import UIInput from 'components/Input'
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

                <UI.Select
                  options={[
                    { label: 'Mot', value: 'mot' },
                    { label: 'Hai', value: 'hai' },
                    { label: 'Ba', value: 'ba' }
                  ]}
                  label="Class"
                  // customViewItem={i => (
                  //   <UI.View
                  //     cursor="pointer"
                  //     flex-direction="row"
                  //     align-items="center"
                  //   >
                  //     <UI.Icon name="star" font-size="20px" />
                  //     <UI.Text>{i.label}</UI.Text>
                  //   </UI.View>
                  // )}
                  value={this.state.selectValue}
                  onChange={value => {
                    this.setState({ selectValue: value })
                  }}
                />
                <UI.MultipleSelect
                  options={[
                    { label: 'Mot', value: 'mot' },
                    { label: 'Hai', value: 'hai' },
                    { label: 'Ba', value: 'ba' }
                  ]}
                  min-width="100px"
                  customViewItem={i => <div>{i.label}</div>}
                  selectedItemView={i => <div>{i.label}</div>}
                  value={this.state.selectValues}
                  label="OK"
                  onChange={values => {
                    this.setState({ selectValues: values })
                  }}
                />
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
                    <UI.View padding="10px">
                      <UI.View
                        align-items="center"
                        justify-content="center"
                        height="50px"
                        background-mobile={colors.primary}
                        box-shadow={colors.shadow_level_2}
                        color-mobile="white"
                      >
                        {item}
                      </UI.View>
                    </UI.View>
                  )}
                </UIGrid>
                <UI.Text
                  font-size="20"
                  padding="15"
                  text-align="center"
                  width="100%"
                >
                  UI Input demo
                </UI.Text>
                <UI.Input
                  placeholder="nice placeholder"
                  variant="multiline"
                  value={this.state.text}
                  width="100%"
                  custom-style={(theme: any) => `
                     @media only screen and (max-width: 480px) {
                      textarea {
                        width: 200px;
                        height: 400px;
                        font-size: 20px;
                      }
                     }
                      
                    `}
                  onChange={value => {
                    console.log('valueeee', value)
                    this.setState({ text: value })
                  }}
                />
              </UI.View>
              <UI.CheckBox
                flex-direction="row"
                value={this.state.value}
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

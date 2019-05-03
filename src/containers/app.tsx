import * as React from 'react'
import * as UI from 'components'
import UIList from 'components/List'
import UIGrid from 'components/Grid'
import Theme from 'components/Theme'
import UIInput from 'components/Input'
// import * as UI from 'components'

const arr = [
  { name: 'nguyen', label: 'label', value: 1 },
  { name: 'nguyen2', label: 'label2', value: 2 },
  { name: 'nguyen3', label: 'label3', value: 3 },
  { name: 'nguyen4', label: 'label4', value: 4 }
]
export default class Main extends React.Component {
  state = {
    value: false,
    text: '',
    selectValue: '',
    selectValues: [],
    account: '',
    password: ''
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
                Grid Multiple Select Demo
              </UI.Text>
              <UI.GridMultipleSelect
                options={[
                  { label: 'hello', value: 'mot' },
                  { label: 'hello1', value: 'hai' },
                  { label: 'hello2', value: 'hihi2' }
                ]}
                column={3}
                value={this.state.selectValues}
                onChange={values => {
                  this.setState({ selectValues: values })
                }}
              />
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
              <UI.Text height="30">{this.state.account}</UI.Text>
              <UI.Text height="30">{this.state.password}</UI.Text>
              <UI.Input
                padding-top="12"
                label="Account"
                placeholder="Account"
                value={this.state.account}
                onChange={val => {
                  this.setState({ account: val })
                }}
              />
              <UI.Input
                padding-top="12"
                type="password"
                placeholder="Password"
                label="Password"
                value={this.state.password}
                onChange={val => {
                  this.setState({ password: val })
                }}
              />
              <UI.Select
                label="Chọn tên"
                margin="20"
                width="300"
                options={arr}
                // customViewItem={(item: any) => (
                //   <UI.Text padding="5">{item.name}</UI.Text>
                // )}
                // selectedItemView={item => <UI.Text>{item.name}</UI.Text>}
                value={this.state.selectValue}
                valueKey="value"
                labelKey="name"
                onChange={val => {
                  this.setState({ selectValue: val })
                }}
              />
              <UI.Toggle label="Hide and Show" width="300">
                <UI.Text>UIText</UI.Text>
                <UI.Button>Button</UI.Button>
                <UI.Input />
                <UI.Icon name="person" />
              </UI.Toggle>
              <UI.Text>ABCD</UI.Text>
            </UI.View>
          )}
        </UI.ThemeValueProvider>
      </UI.Theme>
    )
  }
}

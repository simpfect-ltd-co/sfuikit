import * as React from 'react'
import * as UI from 'components'
import UIList from 'components/List'
import UIGrid from 'components/Grid'
import Theme from 'components/Theme'
import UIInput from 'components/Input'
import UIDatePicker from 'components/Calendar/DatePicker'
import UIMultiSelect from 'components/Select/MultipleSelect'
import UISelect from 'components/Select/Select'
import UICalendar from 'components/Calendar'
// import * as UI from 'components'

const arr = [
  { name: 'nguyen', label: 'label', value: 1 },
  { name: 'nguyen2', label: 'label2', value: 2 },
  { name: 'nguyen3', label: 'label3', value: 3 },
  { name: 'nguyen4', label: 'label4', value: 4 },
  { name: 'nguyen5', label: 'label5', value: 5 },
  { name: 'nguyen6', label: 'label6', value: 6 },
  { name: 'nguyen7', label: 'label7', value: 7 },
  { name: 'nguyen8', label: 'label8', value: 8 }
]
export default class Main extends React.Component {
  state = {
    value: true,
    text: '',
    selectValue: '',
    selectValues: [],
    account: '',
    password: '',
    dateValue: '',
    date: '2019-05-11'
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
                <UI.Switch
                  bind="test"
                  padding="15"
                  primaryColor={colors.primary}
                  secondaryColor={colors.light_primary}
                />
                <UI.Switch bind="helloworld" />
                <UI.Toggle bind="test" valueKey="isOpen">
                  Hellow world
                </UI.Toggle>
              </UI.View>
            </UI.View>
          )}
        </UI.ThemeValueProvider>
      </UI.Theme>
    )
  }
}

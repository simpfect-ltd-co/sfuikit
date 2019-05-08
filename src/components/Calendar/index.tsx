import * as React from 'react'
import UIView from '../View'
import UIGrid from '../Grid'
import UIText from '../Text'
import UISelect from '../Select/Select'
import { ThemeValueProvider } from 'components/Theme'
import UIIcon from 'components/Icon'
interface Props {
  value: string
  onChange?: any
}
const generateData = () => {
  const days = []
  for (let i = 0; i < 31; i++) {
    days.push(i + 1)
  }
  const months = []
  for (let i = 0; i < 12; i++) {
    months.push(i + 1)
  }
  const years = []
  for (let i = 1900; i < 2100; i++) {
    years.push(i)
  }
  const dayInWeek = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
  return {
    days,
    months,
    years,
    dayInWeek
  }
}

const formatDate = (d: string) => {
  return d.length == 1 ? '0' + d : d
}

const isValid = (y: string, m: string, d: string) => {
  return new Date(y + '-' + m + '-' + formatDate(d)).getDate().toString() === d
}
const data = generateData()
let cachedMonth = ''
export default class extends React.Component<Props> {
  state = {
    selectedYear: '',
    selectedMonth: '',
    selectedDate: ''
  }
  componentDidMount() {
    if (this.props.value) {
      cachedMonth = formatDate(
        (new Date(this.props.value).getMonth() + 1).toString()
      )
      this.setState({
        selectedYear: new Date(this.props.value).getFullYear().toString(),
        selectedMonth: formatDate(
          (new Date(this.props.value).getMonth() + 1).toString()
        ),
        selectedDate: formatDate(
          new Date(this.props.value).getDate().toString()
        )
      })
    } else {
      cachedMonth = formatDate((new Date().getMonth() + 1).toString())
      this.setState({
        selectedYear: new Date().getFullYear().toString(),
        selectedMonth: formatDate((new Date().getMonth() + 1).toString()),
        selectedDate: formatDate(new Date().getDate().toString())
      })
    }
  }
  generateDates = () => {
    const emptySlots = new Date(
      this.state.selectedYear + '-' + this.state.selectedMonth + '-01'
    ).getDay()
    const dates: any = []
    for (let i = 0; i < emptySlots - 1; i++) {
      dates.push(-1)
    }
    for (let i = 0; i < data.days.length; i++) {
      dates.push(data.days[i])
    }
    return dates
  }
  render() {
    const { selectedYear, selectedMonth, selectedDate } = this.state
    return (
      <ThemeValueProvider>
        {(theme: any) => (
          <UIView data-component="wrapper" width="300px">
            <UIView
              data-component="header"
              height="70px"
              border-radius="3px 3px 0px 0px"
              background={theme.primary}
            >
              <UISelect
                options={data.years.map(d => {
                  return { label: d.toString(), value: d.toString() }
                })}
                value={this.state.selectedYear}
                onChange={value => {
                  this.setState({
                    selectedYear: value,
                    isSelectingYear: false
                  })
                }}
                border="none"
                custom-style={theme => `
                    & [data-component='select-popup'] {
                        height: 300px;
                        display: block;
                    }
                    & [data-component='selected-value'] {
                        color: white;
                    }

                    & [data-component='right-icon'] {
                        display: none;
                    }
                `}
              />
              <UIText>
                {data.dayInWeek[
                  new Date(
                    selectedYear + '-' + selectedMonth + '-' + selectedDate
                  ).getDay()
                ] +
                  ', ' +
                  selectedDate +
                  ', Th' +
                  selectedMonth}
              </UIText>
            </UIView>
            <UIView>
              <UIView flex-direction="row" justify-content="space-between">
                <UIIcon
                  name="chevron_left"
                  onClick={() => {
                    if ((parseInt(this.state.selectedMonth) - 1) % 12 == 0) {
                      const previousYear = formatDate(
                        (parseInt(this.state.selectedYear) - 1).toString()
                      )
                      this.setState({
                        selectedMonth: 12,
                        selectedYear: previousYear
                      })
                    } else {
                      const previousMonth = formatDate(
                        (parseInt(this.state.selectedMonth) - 1).toString()
                      )
                      this.setState({ selectedMonth: previousMonth })
                    }
                  }}
                />
                <UIText>{`Tháng ${this.state.selectedMonth}`}</UIText>
                <UIIcon
                  name="chevron_right"
                  onClick={() => {
                    if ((parseInt(this.state.selectedMonth) + 1) % 12 == 1) {
                      const nextYear = formatDate(
                        (parseInt(this.state.selectedYear) + 1).toString()
                      )
                      this.setState({
                        selectedMonth: 1,
                        selectedYear: nextYear
                      })
                    } else {
                      const nextMonth = formatDate(
                        (parseInt(this.state.selectedMonth) + 1).toString()
                      )
                      this.setState({ selectedMonth: nextMonth })
                    }
                  }}
                />
              </UIView>
              <UIGrid
                data-component="date-header"
                column={7}
                items={['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']}
              >
                {item => <UIText color={theme.divider}>{item}</UIText>}
              </UIGrid>
              <UIGrid
                data-component="date-content"
                column={7}
                items={this.generateDates()}
              >
                {item => (
                  <UIText
                    cursor="pointer"
                    data-selected={
                      cachedMonth === this.state.selectedMonth &&
                      this.state.selectedDate === formatDate(item.toString())
                    }
                    custom-style={theme => `
                        &[data-selected='true'] {
                            background: red;
                        }
                    `}
                    onClick={() => {
                      cachedMonth = this.state.selectedMonth
                      this.setState(
                        {
                          selectedDate: formatDate(item.toString())
                        },
                        () => {
                          this.props.onChange &&
                            this.props.onChange(
                              formatDate(this.state.selectedYear) +
                                '-' +
                                formatDate(this.state.selectedMonth) +
                                '-' +
                                formatDate(this.state.selectedDate)
                            )
                        }
                      )
                    }}
                  >
                    {isValid(selectedYear, selectedMonth, item.toString())
                      ? item
                      : ''}
                  </UIText>
                )}
              </UIGrid>
            </UIView>
          </UIView>
        )}
      </ThemeValueProvider>
    )
  }
}

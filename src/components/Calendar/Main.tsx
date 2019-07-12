import * as React from 'react'
import UIView from '../View'
import UIGrid from '../Grid'
import UIText from '../Text'
import { ThemeValueProvider } from 'components/Theme'
import UIIcon from 'components/Icon'
import { generateData, formatDate, isValid } from './libs'
interface Props {
  selectedMonth: string
  selectedDate: string
  selectedYear: string
  finalDate: string
  onDateChange?: any
  onMonthChange?: any
  onYearChange?: any
  isStatic?: boolean
  data: any
  customMonthLabel?: (month: string) => string
  customDayOfWeek?: string[]
}

export default class extends React.Component<Props> {
  generateDates = () => {
    const emptySlots = new Date(
      this.props.selectedYear + '-' + this.props.selectedMonth + '-01'
    ).getDay()
    const dates: any = []
    for (let i = 0; i < emptySlots - 1; i++) {
      dates.push(-1)
    }
    for (let i = 0; i < this.props.data.days.length; i++) {
      dates.push(this.props.data.days[i])
    }
    return dates
  }
  render() {
    const { selectedYear, selectedMonth, selectedDate } = this.props
    return (
      <ThemeValueProvider>
        {(theme: any) => (
          <UIView>
            <UIView
              flex-direction="row"
              justify-content="space-between"
              align-items="center"
              padding="13 10"
            >
              <UIIcon
                name="chevron_left"
                font-size="20"
                onClick={() => {
                  if ((parseInt(this.props.selectedMonth) - 1) % 12 == 0) {
                    const previousYear = formatDate(
                      (parseInt(this.props.selectedYear) - 1).toString()
                    )
                    this.props.onMonthChange && this.props.onMonthChange('12')
                    this.props.onYearChange &&
                      this.props.onYearChange(previousYear)
                  } else {
                    const previousMonth = formatDate(
                      (parseInt(this.props.selectedMonth) - 1).toString()
                    )
                    this.props.onMonthChange &&
                      this.props.onMonthChange(previousMonth)
                  }
                }}
              />
              <UIText>
                {this.props.customMonthLabel
                  ? `${this.props.customMonthLabel(this.props.selectedMonth)} ${
                      this.props.isStatic ? this.props.selectedYear : ''
                    }`
                  : `Tháng ${this.props.selectedMonth} ${
                      this.props.isStatic ? this.props.selectedYear : ''
                    }`}
              </UIText>
              <UIIcon
                name="chevron_right"
                font-size="20"
                onClick={() => {
                  if ((parseInt(this.props.selectedMonth) + 1) % 12 == 1) {
                    const nextYear = formatDate(
                      (parseInt(this.props.selectedYear) + 1).toString()
                    )
                    this.setState({
                      selectedMonth: 1,
                      selectedYear: nextYear
                    })
                    this.props.onMonthChange && this.props.onMonthChange('1')
                    this.props.onYearChange && this.props.onYearChange(nextYear)
                  } else {
                    const nextMonth = formatDate(
                      (parseInt(this.props.selectedMonth) + 1).toString()
                    )
                    this.props.onMonthChange &&
                      this.props.onMonthChange(nextMonth)
                  }
                }}
              />
            </UIView>
            <UIView
              width="100%"
              align-items="center"
              data-component="calendar-body"
            >
              <UIGrid
                data-component="date-header"
                column={7}
                padding="0 10"
                width="300px"
                items={
                  this.props.customDayOfWeek
                    ? this.props.customDayOfWeek
                    : ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
                }
              >
                {item => (
                  <UIText color={theme.divider} text-align="center">
                    {item}
                  </UIText>
                )}
              </UIGrid>
              <UIGrid
                data-component="date-content"
                column={7}
                padding="0 10"
                width="300px"
                items={this.generateDates()}
              >
                {item => (
                  <UIText
                    cursor="pointer"
                    text-align="center"
                    padding="12"
                    data-selected={
                      this.props.selectedYear ===
                        this.props.finalDate.split('-')[0] &&
                      this.props.selectedMonth ===
                        this.props.finalDate.split('-')[1] &&
                      this.props.selectedDate === formatDate(item.toString())
                    }
                    custom-style={theme => `
                        &[data-selected='true'] {
                            background: ${theme.accent};
                            border-radius: 50%;
                            color: white;
                        }
                    `}
                    onClick={() => {
                      this.props.onDateChange &&
                        this.props.onDateChange(formatDate(item.toString()))
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

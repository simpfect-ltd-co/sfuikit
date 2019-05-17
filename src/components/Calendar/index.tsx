import * as React from 'react'
import UIView, { BaseProps } from '../View'
import MainView from './Main'
import Header from './Header'
import { formatDate, generateData } from './libs'
import { ThemeValueProvider } from 'components/Theme'
const _omit = require('lodash/omit')
interface Props extends BaseProps {
  isStatic?: boolean
  value: string
  onChange?: any
}
const data = generateData()
export default class extends React.Component<Props> {
  state = {
    selectedYear: '',
    selectedMonth: '',
    selectedDate: '',
    finalDate: ''
  }
  componentDidMount() {
    if (this.props.value) {
      this.setState(
        {
          selectedYear: new Date(this.props.value).getFullYear().toString(),
          selectedMonth: formatDate(
            (new Date(this.props.value).getMonth() + 1).toString()
          ),
          selectedDate: formatDate(
            new Date(this.props.value).getDate().toString()
          )
        },
        () => {
          this.setState({
            finalDate: `${this.state.selectedYear}-${
              this.state.selectedMonth
            }-${this.state.selectedDate}`
          })
        }
      )
    } else {
      this.setState(
        {
          selectedYear: new Date().getFullYear().toString(),
          selectedMonth: formatDate((new Date().getMonth() + 1).toString()),
          selectedDate: formatDate(new Date().getDate().toString())
        },
        () => {
          this.setState({
            finalDate: `${this.state.selectedYear}-${
              this.state.selectedMonth
            }-${this.state.selectedDate}`
          })
        }
      )
    }
  }

  render() {
    return (
      <UIView
        data-component="calendar-wrapper"
        default-style={(theme: any) => `
        width: 280px;
        `}
        {..._omit(this.props, 'value', 'onChange', 'isStatic')}
      >
        {this.props.isStatic ? null : (
          <Header
            data={data}
            finalDate={this.state.finalDate}
            selectedYear={this.state.selectedYear}
            selectedMonth={this.state.selectedMonth}
            selectedDate={this.state.selectedDate}
            onYearChange={(value: string) => {
              this.setState({ selectedYear: value })
            }}
          />
        )}
        <MainView
          selectedDate={this.state.selectedDate}
          selectedYear={this.state.selectedYear}
          selectedMonth={this.state.selectedMonth}
          finalDate={this.state.finalDate}
          data={data}
          onDateChange={(date: string) => {
            this.setState(
              {
                selectedDate: date,
                finalDate: `${this.state.selectedYear}-${
                  this.state.selectedMonth
                }-${date}`
              },
              () => {
                this.props.onChange && this.props.onChange(this.state.finalDate)
              }
            )
          }}
          onMonthChange={(month: string) => {
            this.setState({ selectedMonth: month })
          }}
          onYearChange={(year: string) => {
            this.setState({ selectedYear: year })
          }}
          isStatic={this.props.isStatic}
        />
      </UIView>
    )
  }
}

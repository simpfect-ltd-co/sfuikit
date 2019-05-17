import * as React from 'react'
import UIView, { BaseProps } from '../View'
import UIModal from '../Modal'
import UIText from '../Text'
import UICalendar from '../Calendar'
import * as moment from 'moment-mini'
interface Props extends BaseProps {
  value: string
  onChange?: any
}
export default class DatePicker extends React.Component<Props> {
  state = {
    isOpen: false,
    selectedDate: this.props.value || moment().format('YYYY-MM-DD')
  }
  render() {
    return (
      <UIView
        {...this.props}
        default-style={(theme: any) => `
        & [data-component='text-date'] {
            background: #f5f5f5;
            padding: 10;
            width: 100px;
            border-radius: 2px;
            text-align: center;
            cursor: pointer;
        }
        `}
      >
        <UIText
          data-component={'text-date'}
          onClick={() => {
            this.setState({ isOpen: true })
          }}
        >
          {moment(this.props.value || this.state.selectedDate).format(
            'DD/MM/YYYY'
          )}
        </UIText>
        <UIModal
          open={this.state.isOpen}
          onClick={() => {
            this.setState({ isOpen: false })
          }}
        >
          <UIView
            border-radius="3px 3px 0px 0px"
            background="white"
            overflow="hidden"
            onClick={(e: any) => {
              e.stopPropagation()
            }}
          >
            <UICalendar
              value={this.props.value || this.state.selectedDate}
              onChange={(value: any) => {
                this.setState({ selectedDate: value })
              }}
            />
            <UIView
              flex-direction="row"
              justify-content="flex-end"
              padding="15"
            >
              <UIText
                variant="accent"
                width="70px"
                text-align="center"
                font-weight="500"
                onClick={() => {
                  this.props.onChange &&
                    this.props.onChange(this.state.selectedDate)
                  this.setState({ isOpen: false })
                }}
              >
                OK
              </UIText>
            </UIView>
          </UIView>
        </UIModal>
      </UIView>
    )
  }
}

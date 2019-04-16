import * as React from 'react'
import styled from 'styled-components'
import UIText from './Text'
import { BaseView, Enhancer, BaseProps } from './View'

interface Props extends BaseProps {
  value: boolean
  onChange?: any
  inverted?: boolean
  label?: string
}
export default class CheckBox extends React.Component<Props> {
  handleChange = (e: any) => {
    e.stopPropagation()
    if (this.props.onChange) {
      this.props.onChange(e.target.checked)
    }
  }
  render() {
    return (
      <Enhancer>
        <Wrapper
          {...this.props}
          default-style={(theme: any) => `
         position: relative;
         display: flex;
         align-items: center;
         justify-content: flex-start;
         & input[type='checkbox'] {
           -webkit-appearance: none;
           width: 16px;
           height: 16px;
           position: absolute;
           left: 3px;
           margin: 0;
           cursor: pointer;
           border: none;
           outline: none;
           background: none !important;
         }
       
         & i {
           cursor: pointer;
           color: ${theme.secondary_text};
           font-size: 22px;
         }
       
         & i.checked {
           color: ${theme.accent};
         }
       
         &[data-inverted='true'] i,
         &[data-inverted='true'] i.checked {
           color: white;
         }
       
         & input[type='checkbox']:focus {
           outline: none;
         }
        `}
        >
          {this.props.value ? (
            <i className="material-icons checked">check_box</i>
          ) : (
            <i className="material-icons">check_box_outline_blank</i>
          )}
          <input
            type="checkbox"
            checked={this.props.value}
            onChange={this.handleChange}
          />
          <UIText
            onClick={() => {
              this.props.onChange && this.props.onChange(!this.props.value)
            }}
          >
            {this.props.label}
          </UIText>
        </Wrapper>
      </Enhancer>
    )
  }
}

const Wrapper = styled(BaseView)``

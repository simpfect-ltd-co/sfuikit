import * as React from 'react'
import { BaseProps, Enhancer, BaseView } from 'components/View'
import styled from 'styled-components'
const omit = require('lodash/omit')
interface Props extends BaseProps {
  onChange?: (value: string) => void
  value?: string
  label?: string
  placeholder?: string
  type?: string
  autoComplete?: string
}

export default class UIInput extends React.Component<Props> {
  state = {
    isActive: false
  }
  render() {
    if (this.props.variant === 'multiline') {
      return (
        <Enhancer>
          <TextAreaWrapper
            {...this.props}
            default-style={(theme: any) => `
            position: relative;
            margin: 5 0;
            label {
              position: absolute;
              top: -5px;
              font-size: 10px;
              left: 5;
              color: ${theme.primary};
              background: white;
              padding: 0 1;
            }

            textarea {
              border: 1px solid ${theme.divider};
              border-radius: 3px;
              width: 100%;
              min-height: 100px;
              font-size: 14px;
              padding: 12 7;
              line-height: 23px;
              resize: none;
              font-family: Roboto !important;

              &:focus {
                outline: none !important;
                padding: 11 6;
                border: 2px solid ${theme.accent};
              }
            }
        `}
          >
            <label>{this.props.label}</label>
            <textarea
              placeholder={this.props.placeholder}
              value={this.props.value}
              onChange={(e: any) => {
                e.stopPropagation()
                this.props.onChange && this.props.onChange(e.target.value)
              }}
            />
          </TextAreaWrapper>
        </Enhancer>
      )
    } else
      return (
        <Enhancer>
          <Wrapper
            {...this.props}
            data-active={
              this.state.isActive || !!this.props.value || !this.props.label
            }
            default-style={(theme: any) => `
          position: relative;
          label {
            position: absolute;
            color: ${theme.secondary_text};
            pointer-events: none;
            transition: 0.3s;
            bottom: 7;
            padding-left: 2px;
          }
        
          input {
            height: 30px;
            border: none;
            border-bottom: 1px solid ${theme.divider};
            width: 100%;
            font-size: 14px;
            background: transparent;

            &:focus {
              outline: none;
              border-bottom: 2px solid ${theme.accent} !important;
              padding-top: 1px !important;
            }
          }
          
          input::placeholder {
            opacity: 0;
            transition: 0.3s;
          }         

          &[data-active='true'] {
            label {
              color: ${theme.primary};
              font-size: 10px;
              padding-bottom: 20px;
            }

            input::placeholder {
              opacity: 1;
            }
          }
          `}
          >
            {this.props.label && <label>{this.props.label}</label>}
            <input
              autoComplete={this.props.autoComplete}
              type={this.props.type}
              placeholder={this.props.placeholder}
              value={this.props.value}
              onChange={(e: any) => {
                e.stopPropagation()
                this.props.onChange && this.props.onChange(e.target.value)
              }}
              onMouseDown={(e: any) => {
                e.stopPropagation()
                this.setState({ isActive: true })
              }}
              onBlur={(e: any) => {
                e.stopPropagation()
                if (!e.target.value) {
                  this.setState({ isActive: false })
                }
              }}
            />
          </Wrapper>
        </Enhancer>
      )
  }
}
const Wrapper = styled(BaseView)``
const TextAreaWrapper = styled(BaseView)``

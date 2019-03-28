import * as React from 'react'
import { BaseProps, Enhancer, BaseView } from 'components/View'
import styled from 'styled-components'
interface Props extends BaseProps {
  onChange?: (value: string) => void
  value?: string
  placeholder?: string
  type?: string
  plain?: boolean
  disabled?: boolean
  readOnly?: boolean
}

export default class UIInput extends React.Component<Props> {
  state = {
    active: false
  }
  render() {
    return (
      <Enhancer>
        <Wrapper {...this.props}>
          <Label data-active={this.state.active || !!this.props.value}>
            {this.props.placeholder}
          </Label>
          <Input
            suppressContentEditableWarning={true}
            contentEditable={!(this.props.disabled || this.props.readOnly)}
            data-plain={this.props.plain}
            data-disabled={this.props.disabled}
            data-readonly={this.props.readOnly}
            data-type={this.props.type}
            onKeyPress={(e: any) => {
              if (this.props.type == 'number' && isNaN(Number(e.key))) {
                e.preventDefault()
              }
            }}
            onKeyUp={(e: any) => {
              this.props.onChange && this.props.onChange(e.target.innerText)

              let range = document.createRange()
              range.selectNodeContents(e.target)
              range.collapse(false)
              let selection = window.getSelection()
              selection.removeAllRanges()
              selection.addRange(range)
            }}
            onClick={(e: any) => {
              this.props.onClick && this.props.onClick(e)
              if (!this.props.disabled) this.setState({ active: true })
            }}
            onBlur={() => {
              this.setState({ active: false })
            }}
          >
            {this.props.value}
          </Input>
        </Wrapper>
      </Enhancer>
    )
  }
}

const Wrapper = styled(BaseView)`
  position: relative;
  margin: 5;
`
const Label = styled.span`
  color: ${(p: any) => p.theme.secondary_text};
  pointer-events: none;
  height: 0;
  transform: translateY(22px);
  transform-origin: top left;
  transition: 0.2s;
  &[data-active='true'] {
    font-size: 12px;
    transform: translate(0);
    color: ${(p: any) => p.theme.primary};
  }
`
const Input = styled.span`
  white-space: nowrap;
  overflow: hidden;
  br {
    display: none;
  }
  margin-top: 16px;
  border: none;
  background: none;
  border-bottom: 1px solid ${(p: any) => p.theme.divider};
  padding: 6 0 7;
  :hover {
    border-bottom: 2px solid ${(p: any) => p.theme.primary_text};
  }
  :focus {
    outline: none;
    border-bottom: 2px solid ${(p: any) => p.theme.primary};
  }
  &[data-plain='true'] {
    border: none;
  }
  &[data-disabled='true'] {
    height: 1.3em;
    border-bottom: 1px dotted;
    color: ${(p: any) => p.theme.secondary_text};
  }
  &[data-readonly='true'] {
    height: 1.3em;
  }
  &[data-type='password'] {
    -webkit-text-security: disc;
  }
`

export class MultilineInput extends React.Component<Props> {
  state = {
    active: false
  }
  render() {
    return (
      <Enhancer>
        <Wrapper {...this.props}>
          <Label data-active={this.state.active || !!this.props.value}>
            {this.props.placeholder}
          </Label>
          <Multiline
            contentEditable={!(this.props.disabled || this.props.readOnly)}
            data-plain={this.props.plain}
            data-disabled={this.props.disabled}
            data-readonly={this.props.readOnly}
            data-type={this.props.type}
            onKeyPress={(e: any) => {
              if (this.props.type == 'number' && isNaN(e.key)) {
                e.preventDefault()
              }
            }}
            onKeyUp={(e: any) => {
              this.props.onChange && this.props.onChange(e.target.innerText)
            }}
            onClick={(e: any) => {
              this.props.onClick && this.props.onClick(e)
              if (!this.props.disabled) this.setState({ active: true })
            }}
            onBlur={() => {
              this.setState({ active: false })
            }}
          />
        </Wrapper>
      </Enhancer>
    )
  }
}

const Multiline = styled.span`
  overflow: auto;
  height: 4.7em;
  margin-top: 16px;
  border: none;
  background: none;
  border-bottom: 1px solid ${(p: any) => p.theme.divider};
  padding: 6 0 7;
  :hover {
    border-bottom: 2px solid ${(p: any) => p.theme.primary_text};
  }
  :focus {
    outline: none;
    border-bottom: 2px solid ${(p: any) => p.theme.primary};
  }
  &[data-plain='true'] {
    border: none;
  }
  &[data-disabled='true'] {
    height: 4.7em;
    border-bottom: 1px dotted;
    color: ${(p: any) => p.theme.secondary_text};
  }
  &[data-readonly='true'] {
    height: 4.7em;
  }
  &[data-type='password'] {
    -webkit-text-security: disc;
    -moz-text-security: disc;
  }
`

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
}
interface InputProps {
  onChange?: (value: string) => void
  value?: string
  placeholder?: string
  type?: string
  // 'font-size'?: string
}

export default class UIInput extends React.Component<Props> {
  state = {
    active: false
  }
  render() {
    return (
      <Enhancer>
        <Wrapper
          {...this.props}
          onChange={(e: any) => {
            this.props.onChange && this.props.onChange(e.target.value)
          }}
          onClick={(e: any) => {
            this.props.onClick && this.props.onClick(e)
            this.setState({ active: true })
            console.log('props', this.props)
          }}
          onBlur={() => {
            this.setState({ active: false })
          }}
        >
          <Label data-active={this.state.active || !!this.props.value}>
            {this.props.placeholder}
          </Label>
          <Input
            {...this.props}
            style={{ ...this.props }}
            data-plain={this.props.plain}
            data-disabled={this.props.disabled}
          >
            {this.props.children}
          </Input>
        </Wrapper>
      </Enhancer>
    )
  }
}

const BaseInput = styled.input`
  width: 100%;
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
  ::placeholder {
    opacity: 0;
  }
  &[data-plain='true'] {
    border: none;
  }
  &[data-disabled]='true'] {
    border: red !important;
  }
`

const Input = styled(BaseInput)`
${(p: any) => p['sf-default-style'] && p['sf-default-style'](p.theme)}
  ${(p: any) => p['sf-css']}
  ${(p: any) => {
    switch (p.variant) {
      case 'plain':
        return 'border: none !important;'
      case 'disabled':
        return (
          'color:' +
          p.theme.secondary_text +
          '; border-bottom: 1px dotted' +
          p.theme.secondary_text +
          ';'
        )
      default:
        return ''
    }
  }}
`

const Wrapper = styled(BaseView)`
  position: relative;
  // height: 48px;
  margin: 5;
`
const Label = styled.div`
  color: ${(p: any) => p.theme.secondary_text};
  pointer-events: none;
  height: 0;
  // position: absolute;
  // top: 0;
  transform: translateY(19px);
  transform-origin: top left;
  transition: 0.2s;
  &[data-active='true'] {
    font-size: 12px;
    transform: translate(0);
    color: ${(p: any) => p.theme.primary};
  }
`

export class MultilineInput extends React.Component<Props> {
  state = {
    active: false
  }
  render() {
    return (
      <Wrapper>
        <Enhancer>
          <Label
            {...this.props}
            data-active={this.state.active || !!this.props.value}
          >
            {this.props.placeholder}
          </Label>
        </Enhancer>
        <Enhancer>
          <MultilineWrapper
            {...this.props}
            onChange={(e: any) => {
              this.props.onChange && this.props.onChange(e.target.value)
            }}
            onClick={(e: any) => {
              this.props.onClick && this.props.onClick(e)
              this.setState({ active: true })
            }}
            onBlur={() => {
              this.setState({ active: false })
            }}
          />
        </Enhancer>
      </Wrapper>
    )
  }
}

const BaseMultiline = styled.textarea`
  ${(p: any) => p['sf-default-style'] && p['sf-default-style'](p.theme)}
  ${(p: any) => p['sf-css']}
`

const MultilineWrapper = styled(BaseMultiline)`
    margin-top:16px;
    width:100%;
    height:4rem;
    border: none;
    // background: transparent;
    border-bottom: 1px solid ${(p: any) => p.theme.divider};
    padding: 6px 0 7px;
    resize: none;
    }
    :hover {
    border-bottom: 2px solid ${(p: any) => p.theme.primary_text};
    }
    :focus {
    outline: none;
    border-bottom: 2px solid ${(p: any) => p.theme.primary}
    }
    ::placeholder{
      opacity:0;
    }
`

import * as React from 'react'
import { BaseProps, Enhancer, BaseView } from 'components/View'
import styled from 'styled-components'
interface Props extends BaseProps {
  onChange?: (value: string) => void
  value?: string
  placeholder?: string
  type?: string
}

export default class UIInput extends React.Component<Props> {
  state = {
    active: false
  }
  render() {
    return (
      <Wrapper>
        <Label data-active={this.state.active || !!this.props.value}>
          {this.props.placeholder}
        </Label>
        <Enhancer>
          <Input
            {...this.props}
            default-style={(theme: any) => `             
              width: 100%;             
              height:32; 
              font-size:16;                      
              box-sizing: border-box;             
              border: none;
              background:none;
              border-bottom: 1px solid ${theme.divider};             
              padding:6 0 7 ;                                              
              :hover {
                border-bottom: 2px solid;
              }
              :focus {
                outline: none; 
                border-bottom: 2px solid ${
                  theme.accent
                };                                   
              }             
              ::placeholder{
                opacity:0;                           
              }
              
            `}
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
          >
            {this.props.children}
          </Input>
        </Enhancer>
      </Wrapper>
    )
  }
}
const BaseInput = styled.input`
  ${(p: any) => p['sf-default-style'] && p['sf-default-style'](p.theme)}
  ${(p: any) => p['sf-css']}
`

const Input = styled(BaseInput)``

const Wrapper = styled.div`
  position: relative;
  height: 48px;
  margin: 5;
`
const Label = styled.div`
  color: #757575;
  font-size: 16;
  pointer-events: none;
  transform: translateY(24px);
  transition: 0.2s;
  transform-origin: top left;
  &[data-active='true'] {
    transform: scale(0.75);
    color: #448aff;
  }
`

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
  render() {
    return (
      // <Wrapper>
      // <Label data-active="true">Label</Label>
      <Enhancer>
        <Input
          {...this.props}
          default-style={(theme: any) => `
              width: 100%;
              font-size: 16;
              box-sizing: content-box;
              border: none;
              border-bottom: 1px solid ${theme.divider};
              padding: 6 0 7;
              :hover {
                border-bottom: 2px solid;
              }
              :focus {
                outline: none;
                border-bottom: 2px solid #1976d2;            
              }
            `}
          onChange={(e: any) => {
            this.props.onChange && this.props.onChange(e.target.value)
          }}
        >
          {this.props.children}
        </Input>
      </Enhancer>

      // </Wrapper>
    )
  }
}
const BaseInput = styled.input`
  ${(p: any) => p['sf-default-style'] && p['sf-default-style'](p.theme)}
  ${(p: any) => p['sf-css']}
`

const Input = styled(BaseInput)``

// const Wrapper = styled.div`
//   margin: 8;
// `
const Label = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12;
  &[data-active='true'] {
    color: #1976d2;
  }
`

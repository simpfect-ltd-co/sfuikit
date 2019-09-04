import * as React from 'react'
import styled from 'styled-components'
import { Enhancer, BaseView, BaseProps, sfConvertStyles } from 'components/View'

interface TextProps extends BaseProps {
  value?: string
}
export default class UIText extends React.Component<TextProps> {
  render() {
    return (
      <Enhancer>
        <Wrapper
          {...this.props}
          default-style={(theme: any) => `color: ${theme.primary_text}`}
        >
          <span>{this.props.children}</span>
        </Wrapper>
      </Enhancer>
    )
  }
}

const Wrapper = styled(BaseView)`
  ${(p: any) => {
    switch (p.variant) {
      case 'primary':
        return 'color: ' + p.theme.primary + ';'
      case 'accent':
        return 'color: ' + p.theme.accent + ';'
      default:
        return ''
    }
  }}

  ${(p: any) =>
    p.theme.darkmode &&
    `color: ${
      p['bright-color-level']
        ? p.theme.bright_color[p['bright-color-level']]
        : '#FFFFFF'
    } !important;`}
`

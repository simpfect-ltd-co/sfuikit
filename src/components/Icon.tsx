import * as React from 'react'
import styled from 'styled-components'
import { Enhancer, BaseView, sfConvertStyles } from 'components/View'

/**
 * name of icons should be taken from Google Material Icons
 * link: https://material.io/tools/icons/
 */
export default class UIIcon extends React.Component<UI.IconProps> {
  render() {
    return (
      <Enhancer>
        <Wrapper
          {...this.props}
          className="material-icons"
          default-style={(theme: any) => `
          color: ${theme.primary_text};
          width: fit-content;
          user-select: none;
          cursor: pointer;`}
        >
          {this.props.name}
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
        : p.theme.bright_color[0]
    };`}
`

import * as React from 'react'
import { Enhancer, BaseProps, BaseView, sfConvertStyles } from 'components/View'
import styled from 'styled-components'
import { animatePointer } from '../libs'
interface Props extends BaseProps {
  onClick?: (e: any) => void
  shouldAnimate?: boolean
}

const DELAY_DURATION_FOR_ANIMATION = 500

export default class UIButton extends React.Component<Props> {
  render() {
    return (
      <Enhancer>
        <Wrapper
          {...this.props}
          default-style={(theme: any) => `
              position: relative;
              overflow: hidden;
              min-height: 36px;
              box-shadow: ${theme.shadow_level_1};
              padding: 0 10;
              background: white;
              text-align: center;
              border-radius: 2px;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              user-select: none;
              min-width: 70px; 
              width: fit-content;
            `}
          onClick={(e: any) => {
            e.stopPropagation()
            if (this.props.shouldAnimate) {
              animatePointer(e, 1000)
              setTimeout(() => {
                this.props.onClick && this.props.onClick(e)
              }, DELAY_DURATION_FOR_ANIMATION)
            } else {
              this.props.onClick && this.props.onClick(e)
            }
          }}
        >
          {this.props.children}
        </Wrapper>
      </Enhancer>
    )
  }
}

const Wrapper = styled(BaseView)`
  ${(p: any) => {
    switch (p.variant) {
      case 'primary':
        return 'background: ' + p.theme.primary + '; color: white;'
      case 'accent':
        return 'background: ' + p.theme.accent + '; color: white;'
      default:
        return ''
    }
  }}
`

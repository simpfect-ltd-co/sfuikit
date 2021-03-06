import * as React from 'react'
import UIView, { BaseProps, BaseView, Enhancer } from 'components/View'
import styled from 'styled-components'
const map = require('lodash/map')
interface Props extends BaseProps {
  items: Array<any>
  children: (item: any, ind: number) => React.ReactElement
  column?: number
  'column-mobile'?: number
  'column-tablet'?: number
  'column-laptop'?: number
}

export default class List extends React.Component<Props> {
  render() {
    return (
      <Enhancer>
        <Wrapper
          {...this.props}
          default-style={() => `
              flex-direction: row;
              flex-wrap: wrap;
            `}
        >
          {map(this.props.items, (item: any, ind: number) => (
            <UIView
              key={ind}
              width={`${100 / (this.props.column || 1)}%`}
              width-mobile={`${100 / (this.props['column-mobile'] || 1)}%`}
              width-tablet={`${100 / (this.props['column-tablet'] || 1)}%`}
              width-laptop={`${100 / (this.props['column-laptop'] || 1)}%`}
            >
              {this.props.children(item, ind)}
            </UIView>
          ))}
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

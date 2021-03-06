import * as React from 'react'
import UIView, { BaseProps, BaseView, Enhancer } from 'components/View'
import styled from 'styled-components'
const map = require('lodash/map')
interface Props extends BaseProps {
  items: Array<any>
  children: (item: any, ind: number) => React.ReactElement
}

export default class List extends React.Component<Props> {
  render() {
    return (
      <Enhancer>
        <Wrapper {...this.props}>
          {map(this.props.items, (item: any, ind: number) => (
            <UIView key={ind}>{this.props.children(item, ind)}</UIView>
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

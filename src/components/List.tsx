import * as React from 'react'
import UIView, { BaseProps } from 'components/View'
const map = require('lodash/map')
const omit = require('lodash/omit')
interface Props extends BaseProps {
  options: Array<any>
  item: (item: any) => any
}

export default class List extends React.Component<Props> {
  render() {
    return [
      <UIView {...omit(this.props, ['options', 'customViewItem'])}>
        {map(this.props.options, (item: any, ind: number) => (
          <UIView key={item.id || ind}>{this.props.item(item)}</UIView>
        ))}
      </UIView>
    ]
  }
}

interface GridProps extends Props {
  column?: number
}

export class GridView extends React.Component<GridProps> {
  render() {
    return (
      <UIView
        style={{ flexDirection: 'row', flexWrap: 'wrap', ...this.props.style }}
        {...omit(this.props, ['options', 'customViewItem', 'column', 'style'])}
      >
        {map(this.props.options, (item: any, ind: number) => (
          <UIView
            style={{
              width: `${100 / (this.props.column || 1)}%`,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            key={item.id || ind}
          >
            {this.props.item(item)}
          </UIView>
        ))}
      </UIView>
    )
  }
}

import styled from 'styled-components'
import * as React from 'react'
const omit = require('lodash/omit')
import { animatePointer } from '../libs'
export interface BaseProps {
  variant?: string
  'flex-direction'?: string
  'justify-content'?: string
  background?: string
  width?: string
  height?: string
  margin?: string
  padding?: string
  'box-shadow'?: number
  border?: string
  style?: any
  color?: string
  shouldAnimate?: boolean
  onClick?: (e: any) => void
  ['default-style']?: (theme: any) => ``
}
const DELAY_DURATION_FOR_ANIMATION = 500

export default class UIView extends React.Component<BaseProps> {
  render() {
    return (
      <Enhancer>
        <BaseView
          {...this.props}
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
        </BaseView>
      </Enhancer>
    )
  }
}

export const Enhancer = (props: any) => {
  const el: any = props.children
  const elProps = {
    ...omit(el.props, 'default-style'),
    'sf-default-style': el.props['default-style']
  }
  return React.cloneElement(el, { ...sfConvertStyles(elProps) })
}

export const BaseView = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${(p: any) => p['sf-default-style'] && p['sf-default-style'](p.theme)}
  ${(p: any) => p['sf-css']};
`
/**
 * CORE CSS MECHANISM
 * Do not touch any single line of this function if you DONT understand this
 * @param props
 */

const validCssProperty = [
  'color',
  'font-weight',
  'font-size',
  'background',
  'margin',
  'padding',
  'height',
  'width',
  'display',
  'border',
  'align-items',
  'flex-direction',
  'justify-content',
  'box-shadow',
  'border-radius',
  'over-flow',
  'max-height'
]
export const sfConvertStyles = (props: any) => {
  const newProps = Object.assign({}, props)
  const keys = Object.keys(newProps)
  let allCss = ''
  let mobileCss = ''
  let tabletCss = ''
  let laptopCss = ''
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const value = props[key]

    if (key.match(/mobile/)) {
      if (validCssProperty.indexOf(key.replace('-mobile', '')) >= 0) {
        const record = key.replace('-mobile', '') + ':' + value + ';'
        mobileCss += record
        delete newProps[key]
      }
    } else if (key.match(/tablet/)) {
      if (validCssProperty.indexOf(key.replace('-tablet', '')) >= 0) {
        const record = key.replace('-tablet', '') + ':' + value + ';'
        tabletCss += record
        delete newProps[key]
      }
    } else if (key.match(/laptop/)) {
      if (validCssProperty.indexOf(key.replace('-laptop', '')) >= 0) {
        const record = key.replace('-laptop', '') + ':' + value + ';'
        laptopCss += record
        delete newProps[key]
      }
    } else {
      if (validCssProperty.indexOf(key) >= 0) {
        const record = key + ':' + value + ';'
        allCss += record
        delete newProps[key]
      }
    }
  }
  newProps['sf-css'] = `${allCss}${laptopCss &&
    '@media only screen and (max-width: 1024px) { ' +
      laptopCss +
      '}'}${tabletCss &&
    '@media only screen and (max-width: 768px) { ' + tabletCss + '}'}
    ${mobileCss &&
      '@media only screen and (max-width: 480px) { ' + mobileCss + '}'}
  `
  return newProps
}

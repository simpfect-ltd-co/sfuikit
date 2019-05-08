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
  'box-shadow'?: string
  border?: string
  // style?: any
  color?: string
  shouldAnimate?: boolean
  onClick?: (e: any) => void
  ['default-style']?: (theme: any) => string
  ['custom-style']?: (theme: any) => string
  cursor?: string
}
const DELAY_DURATION_FOR_ANIMATION = 500

export default class UIView extends React.Component<BaseProps> {
  render() {
    return (
      <Enhancer>
        <BaseView
          {...omit(this.props, 'style')}
          onClick={(e: any) => {
            // e.stopPropagation()
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
    'sf-default-style': el.props['default-style'],
    'sf-custom-style': el.props['custom-style']
  }
  return React.cloneElement(el, { ...sfConvertStyles(elProps) })
}

export const BaseView = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${(p: any) => p['sf-default-style'] && p['sf-default-style'](p.theme)}
  ${(p: any) => p['sf-css']};
  ${(p: any) => p['sf-custom-style'] && p['sf-custom-style'](p.theme)}
`
/**
 * CORE CSS MECHANISM
 * Do not touch any single line of this function if you DONT understand this
 * @param props
 */

const validCssProperty = [
  'align-items',
  'flex-direction',
  'justify-content',
  'animation',
  'animation-delay',
  'animation-direction',
  'animation-duration',
  'animation-iteration-count',
  'animation-name',
  'animation-play-state',
  'animation-timing-function',
  'azimuth',
  'backface-visibility',
  'background',
  'background-attachment',
  'background-clip',
  'background-color',
  'background-image',
  'background-origin',
  'background-position',
  'background-repeat',
  'background-size',
  'bleed',
  'border',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-bottom-style',
  'border-bottom-width',
  'border-collapse',
  'border-color',
  'border-image',
  'border-image-outset',
  'border-image-repeat',
  'border-image-source',
  'border-image-width',
  'border-left',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-radius',
  'border-right',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-spacing',
  'border-style',
  'border-top',
  'border-top-color',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-top-style',
  'border-top-width',
  'border-width',
  'bottom',
  'box-shadow',
  'box-sizing',
  'caption-side',
  'clear',
  'clip',
  'color',
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'columns',
  'content',
  'counter-increment',
  'counter-reset',
  'cursor',
  'direction',
  'display',
  'empty-cells',
  'float',
  'font',
  'font-family',
  'font-size',
  'font-size-adjust',
  'font-stretch',
  'font-style',
  'font-variant',
  'font-weight',
  'height',
  'hyphens',
  'image-rendering',
  'left',
  'letter-spacing',
  'line-height',
  'list-style',
  'list-style-image',
  'list-style-position',
  'list-style-type',
  'margin',
  'margin-bottom',
  'margin-left',
  'margin-right',
  'margin-top',
  'marker-offset',
  'marks',
  'max-height',
  'max-width',
  'min-height',
  'min-width',
  'order',
  'opacity',
  'orphans',
  'outline',
  'outline-color',
  'outline-offset',
  'outline-style',
  'outline-width',
  'overflow',
  'overflow-x',
  'padding',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'padding-top',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'perspective',
  'perspective-origin',
  'position',
  'quotes',
  'resize',
  'right',
  'tab-size',
  'table-layout',
  'text-align',
  'text-align-last',
  'text-decoration',
  'text-decoration-color',
  'text-decoration-line',
  'text-decoration-style',
  'text-indent',
  'text-shadow',
  'text-transform',
  'top',
  'transform',
  'transform-origin',
  'transform-style',
  'transition',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',
  'vertical-align',
  'visibility',
  'white-space',
  'widows',
  'width',
  'word-spacing',
  'word-wrap',
  'z-index'
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

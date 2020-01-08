import * as React from 'react'
import * as ReactDOM from 'react-dom'
import UIView from './View'
import ThemeValueProvider from './ThemeValueProvider'

export default class Popup extends React.Component<UI.PopupProps> {
  triggerRef: any
  popupView: any
  componentDidMount() {
    this.props.showPopup && this.updatePosition()
  }

  componentDidUpdate() {
    this.props.showPopup && this.updatePosition()
  }
  updatePosition = () => {
    const update = () => {
      const triggerDOM = ReactDOM.findDOMNode(this.triggerRef) as HTMLElement
      const triggerBoundingBox = triggerDOM.getBoundingClientRect()
      const popupViewDOM = ReactDOM.findDOMNode(this.popupView) as HTMLElement
      const popupBoundingBox = popupViewDOM.getBoundingClientRect()
      popupViewDOM.style.top =
        (this.props.direction === 'up'
          ? (
              triggerBoundingBox.top -
              parseInt(popupBoundingBox.height.toString())
            ).toString()
          : (
              triggerBoundingBox.top +
              parseInt(triggerBoundingBox.height.toString())
            ).toString()) + 'px'
      popupViewDOM.style.left = triggerBoundingBox.left.toString() + 'px'
      popupViewDOM.style.width = triggerBoundingBox.width.toString() + 'px'
    }
    if (this.props.animationTime) {
      setTimeout(() => {
        update()
      }, this.props.animationTime)
    } else {
      update()
    }
  }
  render() {
    return [
      React.cloneElement(this.props.trigger, {
        ref: (r: any) => (this.triggerRef = r),
        key: 'trigger'
      }),
      <UIView key={'popup'}>
        <ThemeValueProvider>
          {(colors: any) => (
            <UIView
              ref={(r: any) => (this.popupView = r)}
              default-style={(theme: any) => `
                background: white;
                position: absolute;
                box-shadow: ${theme.shadow_level_1};
                overflow: hidden;
                visibility: ${this.props.showPopup ? 'visible' : 'hidden'}
                z-index: 2;
                transition: 0.3s;
                height: auto;
              `}
              custom-style={this.props.popupStyle}
            >
              {this.props.children}
            </UIView>
          )}
        </ThemeValueProvider>
      </UIView>
    ]
  }
}

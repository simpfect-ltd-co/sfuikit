import * as React from 'react'
import styled from 'styled-components'
import UIList from 'components/List'
import Select from 'components/Select/Select'
import { isArray } from 'util'
import UIView, { Enhancer, BaseView } from 'components/View'

export default class MultipleSelect extends Select {
  state = {
    showPopup: false
  }

  render() {
    return (
      <Enhancer>
        <Wrapper
          {...this.props}
          default-style={(theme: any) => `
              & [data-component='list-item'] {
                padding: 0px;
              }
              `}
        >
          {this.props.label ? (
            <UIView
              default-style={(theme: any) => `
              position: absolute;
              margin-top: -5px;
              margin-left: 5px;
              font-size: 10px;
              color: ${theme.primary};
              background: white;
            `}
            >
              {this.props.label}
            </UIView>
          ) : null}
          <UIView
            default-style={(theme: any) => `
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            min-height: 28px;
            cursor: pointer;
            flex-direction: row;
            i {
              color: ${theme.secondary_text};
            }
            padding-left: 2px;
            border: 1px solid ${theme.divider};
            border-radius: 4px;
            `}
            onClick={() => {
              this.setState({ showPopup: !this.state.showPopup })
            }}
          >
            <UIView
              default-style={(theme: any) => `
                flex-direction: row;
                min-height: 46px;
                padding-top: 5px;
              `}
            >
              {this.props.options
                .filter((item: any) =>
                  isArray(this.props.value)
                    ? this.props.value.indexOf(item.value) >= 0
                    : item.value === this.props.value
                )
                .map((item, ind) => (
                  <UIView
                    default-style={(theme: any) => `
                    padding: 3px 5px;
                    background: ${theme.grey};
                    border-radius: 2px;
                    margin: 5px 2px;
                    line-height: 28px;
                    `}
                    key={ind}
                  >
                    {item.label}
                  </UIView>
                ))}
            </UIView>
            <i className="material-icons">arrow_drop_down</i>
          </UIView>
          {this.state.showPopup ? (
            <UIView
              default-style={(theme: any) => `
              background: white;
              position: absolute;
              z-index: 2;
              box-shadow: ${theme.shadow_level_3};
              padding: 5px;
              box-sizing: border-box;
              left: 0;
              overflow: auto;
              -webkit-overflow-scrolling: touch;
              margin: 40 10;
              width: calc(100% - 20px);
              `}
              data-component="select-popup"
            >
              <UIList items={this.props.options}>
                {item => (
                  <UIView
                    default-style={(theme: any) => `
                      &[data-selected='true'] {
                        border-left: 3px solid ${theme.accent};
                        color: ${theme.primary_text} !important;
                      }
                      padding: 5px;
                      &[data-selected='false'] {
                        border-left: 0px solid ${theme.accent};
                        color: ${theme.primary_text} !important;
                      }
                      transition: 0.3s;
                      `}
                    data-selected={
                      (isArray(this.props.value)
                        ? this.props.value
                        : [this.props.value]
                      ).indexOf(item.value) >= 0
                    }
                    onClick={(e: any) => {
                      const temp: any[] = isArray(this.props.value)
                        ? this.props.value.slice(0)
                        : [this.props.value]
                      if (temp.indexOf(item.value) < 0) {
                        temp.push(item.value)
                      } else {
                        temp.splice(temp.indexOf(item.value), 1)
                      }
                      this.props.onChange && this.props.onChange(temp)
                    }}
                  >
                    {this.props.customViewItem &&
                      this.props.customViewItem(item)}
                  </UIView>
                )}
              </UIList>
            </UIView>
          ) : null}
        </Wrapper>
      </Enhancer>
    )
  }
}

const Wrapper = styled(BaseView)``
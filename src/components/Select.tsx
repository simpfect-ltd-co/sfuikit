import * as React from 'react'
import styled from 'styled-components'
import UIList from './List'
import { isArray } from 'util'
import UIView, { Enhancer, BaseView, BaseProps } from './View'
import UIIcon from './Icon'
import Theme, { ThemeValueProvider } from './Theme'

interface Props extends BaseProps {
  options: Array<any>
  customViewItem?: (item: any) => any
  selectedItemView?: (item: any) => any
  value: any
  valueKey?: string
  onChange: (item: any) => void
  style?: any
  label?: string
  popupStyle?: any
  plain?: boolean
}

export default class Select extends React.Component<Props> {
  state = {
    showPopup: false
  }
  handleChange = (item: any) => {
    this.props.onChange &&
      this.props.onChange(item[this.props.valueKey || 'value'])
    this.setState({ showPopup: false })
  }
  handleClickOutside = (e: any) => {
    if (this.state.showPopup) {
      const isClickedInsidePopup = e.target.closest(
        '[data-component="select-popup"]'
      )
      if (!isClickedInsidePopup) {
        e.preventDefault()
        e.stopPropagation()
        setTimeout(() => {
          this.setState({ showPopup: false })
        }, 10)
      }
    }
  }
  componentDidMount() {
    window.addEventListener('click', this.handleClickOutside, true)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside, true)
  }
  render() {
    const selectedItem = this.props.options.filter(
      o => o[this.props.valueKey || 'value'] === this.props.value
    )[0]
    return (
      <Enhancer>
        <Wrapper
          {...this.props}
          data-plain={this.props.plain}
          default-style={(theme: any) => `
          & [data-component='list-item']:hover {
            color: ${theme.primary};
          }
          width: 100%;
          padding: 7px 2px;
          border: 1px solid ${theme.divider};
          box-sizing: border-box;
          border-radius: 3px;
          margin: 5px 0px;
          position: relative;
          &[data-plain='true'] {
            border: none;
            padding: 0;
            margin: 0;
          }
        `}
        >
          {this.props.label ? (
            <UIView
              default-style={(theme: any) => `
                position: absolute;
                margin-top: -14px;
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
          flex-direction: row;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          min-height: 28px;
          cursor: pointer;
          i {
            color: ${theme.secondary_text};
          }
          padding-left: 2px;
          `}
            onClick={() => {
              this.setState({ showPopup: !this.state.showPopup })
            }}
            data-component="selected-value"
          >
            {selectedItem &&
              (this.props.selectedItemView ? (
                this.props.selectedItemView(selectedItem)
              ) : (
                <UIView cursor="pointer">{selectedItem.label}</UIView>
              ))}

            <ThemeValueProvider>
              {(theme: any) => (
                <UIIcon color={theme.secondary_text} name="arrow_drop_down" />
              )}
            </ThemeValueProvider>
          </UIView>
          {this.state.showPopup ? (
            <UIView
              default-style={(theme: any) => `
                background: white;
                position: absolute;
                z-index: 2;
                width: 100%;
                box-shadow: ${theme.shadow_level_3};
                padding: 5px;
                box-sizing: border-box;
                left: 0;
                overflow: auto;
                -webkit-overflow-scrolling: touch;
                `}
              data-component="select-popup"
            >
              <UIList items={this.props.options}>
                {item =>
                  React.cloneElement(
                    this.props.customViewItem ? (
                      this.props.customViewItem(item)
                    ) : (
                      <UIView cursor="pointer">{item.label}</UIView>
                    ),
                    {
                      'data-component': 'list-item',
                      onClick: (e: any) => {
                        e.stopPropagation()
                        this.handleChange(item)
                      }
                    }
                  )
                }
              </UIList>
            </UIView>
          ) : null}
        </Wrapper>
      </Enhancer>
    )
  }
}

// export class MultipleSelect extends Select {
//   state = {
//     showPopup: false
//   }

//   render() {
//     return (
//       <MultipleSelectWrapper
//         style={this.props.style}
//         data-plain={this.props.plain}
//       >
//         {this.props.label ? <Label>{this.props.label}</Label> : null}
//         <SelectedValue
//           onClick={() => {
//             this.setState({ showPopup: !this.state.showPopup })
//           }}
//         >
//           <div className="labels">
//             {this.props.options
//               .filter((item: any) =>
//                 isArray(this.props.value)
//                   ? this.props.value.indexOf(item.value) >= 0
//                   : item.value === this.props.value
//               )
//               .map((item, ind) => (
//                 <MultipleSelectedLabel key={ind}>
//                   {item.label}
//                 </MultipleSelectedLabel>
//               ))}
//           </div>
//           <i className="material-icons">arrow_drop_down</i>
//         </SelectedValue>
//         {this.state.showPopup ? (
//           <PopupWrapper
//             style={this.props.popupStyle}
//             data-component="select-popup"
//           >
//             <UIList items={this.props.options}>
//               {item => (
//                 <ListItem
//                   data-selected={
//                     (isArray(this.props.value)
//                       ? this.props.value
//                       : [this.props.value]
//                     ).indexOf(item.value) >= 0
//                   }
//                   onClick={(e: any) => {
//                     const temp: any[] = isArray(this.props.value)
//                       ? this.props.value.slice(0)
//                       : [this.props.value]
//                     if (temp.indexOf(item.value) < 0) {
//                       temp.push(item.value)
//                     } else {
//                       temp.splice(temp.indexOf(item.value), 1)
//                     }
//                     this.props.onChange && this.props.onChange(temp)
//                   }}
//                 >
//                   {this.props.customViewItem(item)}
//                 </ListItem>
//               )}
//             </UIList>
//           </PopupWrapper>
//         ) : null}
//       </MultipleSelectWrapper>
//     )
//   }
// }

const Wrapper = styled(BaseView)``

const MultipleSelectWrapper = styled(Wrapper)`
  & [data-component='list-item'] {
    padding: 0px;
  }
`
const SelectedValue = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  min-height: 28px;
  cursor: pointer;
  i {
    color: ${(p: any) => p.theme.secondary_text};
  }
  padding-left: 2px;
`

const Label = styled.div`
  position: absolute;
  margin-top: -14px;
  font-size: 10px;
  color: ${(p: any) => p.theme.primary};
  background: white;
`

const PopupWrapper = styled.div`
  background: white;
  position: absolute;
  z-index: 2;
  width: 100%;
  box-shadow: ${(p: any) => p.theme.shadow_level_3};
  padding: 5px;
  box-sizing: border-box;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`

const ListItem = styled.div`
  &[data-selected='true'] {
    border-left: 3px solid ${(p: any) => p.theme.accent};
    color: ${(p: any) => p.theme.primary_text} !important;
  }
  padding: 5px;
  &[data-selected='false'] {
    border-left: 0px solid ${(p: any) => p.theme.accent};
    color: ${(p: any) => p.theme.primary_text} !important;
  }
  transition: 0.3s;
`

const MultipleSelectedLabel = styled.span`
  padding: 3px 5px;
  background: ${(p: any) => p.theme.grey};
  border-radius: 2px;
  margin: 5px 2px;
  line-height: 28px;
`

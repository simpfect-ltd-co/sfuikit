import * as React from 'react'
import * as UI from 'components'
import { colors } from '../components/Theme'

export default class Main extends React.Component {
  state = { showSearchResult: false, isSearchActive: false }
  handleBlur = (e: any) => {
    if (e.target.getAttribute('name') !== 'close') {
      console.log('yooo')
      this.setState({
        isSearchActive: false,
        showSearchResult: false
      })
      window.removeEventListener('mousedown', this.handleBlur)
    }
  }
  render() {
    return (
      <UI.Theme values={{ darkmode: false, ...colors }}>
        <UI.View padding="20px" dark-background-level={4}>
          <UI.DatePicker bind="jskdlfjsd" sync></UI.DatePicker>
          <UI.Input bind="ok" type="number" sync></UI.Input>
          <UI.Input bind="ok" sync></UI.Input>
          <UI.Input bind="jskdlfjsd" sync></UI.Input>
          <UI.Button></UI.Button>
          <UI.ThemeValueProvider>
            {(colors: any) => (
              <UI.Popup
                direction="down"
                showPopup={this.state.showSearchResult}
                popupStyle={() =>
                  `margin-top: 2px; border-radius: 2px 2px 6px 6px; background: red;`
                }
                animationTime={400}
                trigger={
                  <UI.View
                    dark-background-level={this.state.isSearchActive ? '2' : ''}
                    width="40%"
                    height="42px"
                    background={this.state.isSearchActive ? 'blue' : 'red'}
                    border-radius="2px"
                    flex-direction="row"
                    align-items="center"
                    transition="0.3s"
                    width-tablet={this.state.isSearchActive ? '98%' : '52px'}
                    position-tablet="absolute"
                    right-tablet="5px"
                    background-tablet={
                      this.state.isSearchActive ? 'white' : 'none'
                    }
                    onClick={(e: MouseEvent) => {
                      e.stopPropagation()
                      this.setState(
                        {
                          isSearchActive: !this.state.isSearchActive,
                          showSearchResult: !this.state.showSearchResult
                        },
                        () => {
                          if (this.state.isSearchActive) {
                            let input = document.querySelector('input')
                            if (input) {
                              input.focus()
                            }
                            window.addEventListener(
                              'mousedown',
                              this.handleBlur
                            )
                          }
                        }
                      )
                    }}
                  >
                    <UI.Icon
                      name={this.state.isSearchActive ? 'close' : 'search'}
                      margin="10px"
                      padding="5px"
                      color={
                        this.state.isSearchActive
                          ? colors.secondary_text
                          : 'white'
                      }
                    />
                    {this.state.isSearchActive && (
                      <UI.View
                        position="fixed"
                        top="54px"
                        width="100%"
                        height="calc(100vh - 54px)"
                      ></UI.View>
                    )}
                    <UI.Input
                      height="100%"
                      width="98%"
                      custom-style={() => `
                  input{
                    height: 100%;
                    font-size: 15px;                   
                    border: none;
                    padding-left: 2px;
                    color: ${
                      this.state.isSearchActive ? colors.primary_text : 'white'
                    };                     
                    &::placeholder{ color: ${
                      this.state.isSearchActive
                        ? colors.secondary_text
                        : 'white'
                    }; }
                    &:focus{ border: none !important;}                                   
                  }                  
                  `}
                      dark-style={(theme: any) => `
                    input::placeholder {
                      color: ${
                        this.state.isSearchActive ? colors.divider : 'white'
                      }
                    }
                  `}
                      onChange={() => {}}
                      placeholder="Search"
                    />
                  </UI.View>
                }
              >
                <UI.View height="200px" background="red"></UI.View>
              </UI.Popup>
            )}
          </UI.ThemeValueProvider>
        </UI.View>
      </UI.Theme>
    )
  }
}

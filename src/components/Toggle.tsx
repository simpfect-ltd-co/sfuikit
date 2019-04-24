import * as React from 'react'
import UIView, { BaseProps, Enhancer, BaseView } from 'components/View'
import UIText from 'components/Text'
import UIIcon from 'components/Icon'
import styled from 'styled-components'

interface Props extends BaseProps {
  label?: string
  headerBackground?: string
}

export default class Toggle extends React.Component<Props> {
  state = { isShow: false }
  render() {
    return (
      <Enhancer>
        <Wrapper
          {...this.props}
          default-style={(theme: any) => `              
          border: 1px solid ${theme.grey};
          border-radius: 3px 3px 0 0;  
          `}
        >
          <UIView
            default-style={(theme: any) => `                         
            padding: 0 24;
            background: ${this.props.headerBackground || 'rgba(0, 0, 0, 0.03)'};
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            min-height: 48;
            user-select: none;
            cursor: pointer;                             
          `}
            onClick={() => {
              this.setState({ isShow: !this.state.isShow })
            }}
          >
            <UIText>{this.props.label}</UIText>
            <UIIcon
              data-active={this.state.isShow}
              name="expand_more"
              custom-style={(theme: any) => `
              transition:ease-out 0.3s;
              transform:rotate(0);
              color:${theme.secondary_text};
              &[data-active='true']{
                transform: rotate(180deg);
              }
            `}
            />
          </UIView>
          <UIView
            data-active={this.state.isShow}
            default-style={(theme: any) => `                                    
            max-height: 0;
            padding: 0 16;
            transform: scaleY(0);
            transition: cubic-bezier(0, 0.7, 0.3, 1) 0.3s;
            transform-origin: top;
            &[data-active='true']{  
              overflow-y:auto;                                              
              height: auto;
              max-height: 400;
              padding: 16;
              transform: scaleY(1);
            }
          `}
          >
            {this.props.children}
          </UIView>
        </Wrapper>
      </Enhancer>
    )
  }
}

const Wrapper = styled(BaseView)``

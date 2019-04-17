import * as React from 'react'
import styled from 'styled-components'
import { Enhancer, BaseProps, BaseView } from 'components/View'

interface Props extends BaseProps {
  open: boolean
}

export default class Modal extends React.Component<Props> {
  render() {
    return (
      this.props.open && (
        <Enhancer>
          <Wrapper
            {...this.props}
            data-component="overlay"
            default-style={(theme: any) => `
                position: fixed;
                background: rgba(0, 0, 0, 0.7);
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1;
            `}
          >
            {this.props.children}
          </Wrapper>
        </Enhancer>
      )
    )
  }
}

const Wrapper = styled(BaseView)``

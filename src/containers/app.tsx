import * as React from 'react'
import * as UI from 'components'
import styled from 'styled-components'
export default class Main extends React.Component {
  render() {
    return (
      <Wrapper>
        hello world <UI.Button />
      </Wrapper>
    )
  }
}
const Wrapper = styled.div`
  width: 100%;
  background: red;
`

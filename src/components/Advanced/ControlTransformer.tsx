import * as React from 'react'
import { ThemeDataContext } from '../Theme'
interface Props {
  children: any
  bind: string
  data: any
  valueKey?: string // instead of value as usual, sometimes, controls have another key value like "isOpen"
}
class ControlTransformer extends React.Component<Props> {
  render() {
    const bind = this.props.bind
    const valueKey = this.props.valueKey || 'value'
    let ctx = this.props.data.ctx
    return bind
      ? React.cloneElement(this.props.children, {
          [valueKey]: ctx.state && ctx.state[bind] ? ctx.state[bind] : '',
          onChange: (value: any) => {
            ctx.setState({ [bind]: value }, () => {
              window.prefs[bind] = value
            })
          }
        })
      : this.props.children
  }
}

export default (props: any) => (
  <ThemeDataContext.Consumer>
    {(data: any) => <ControlTransformer {...props} data={data} />}
  </ThemeDataContext.Consumer>
)

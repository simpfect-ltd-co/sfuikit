import * as React from 'react'
import { ThemeDataContext } from '../Theme'
interface ControlProps {
  children: any
  bind: string
  data: any
  defaultValue?: any
  bindValueKey?: string // instead of value as usual, sometimes, controls have another key value like "isOpen"
  handleData?: Function
  sync?: boolean
}

class ControlTransformer extends React.Component<ControlProps> {
  constructor(props: ControlProps) {
    super(props)
    if (this.props.bind) {
      if (window.prefs.hasOwnProperty([this.props.bind])) {
        if (!this.props.sync) {
          // throw new Error('key duplicated::' + this.props.bind)
          console.error('key duplicated::' + this.props.bind)
        }
      } else {
        window.prefs[this.props.bind] = ''
      }
    }
  }
  componentDidMount() {
    if (this.props.defaultValue) {
      this.props.data.ctx.setState(
        {
          [this.props.bind]: this.props.defaultValue
        },
        () => {
          window.prefs[this.props.bind] = this.props.defaultValue
        }
      )
    }
  }

  componentWillUnmount() {
    // if (this.props.bind) {
    //   const res = delete window.prefs[this.props.bind]
    // }
  }
  render() {
    const bind = this.props.bind
    if (!bind) {
      return this.props.children
    }

    const bindValueKey = this.props.bindValueKey || 'value'
    let ctx = this.props.data.ctx
    return React.cloneElement(this.props.children, {
      [bindValueKey]:
        ctx.state && ctx.state[bind]
          ? this.props.handleData
            ? this.props.handleData(ctx.state[bind])
            : ctx.state[bind]
          : '',
      onChange: (value: any) => {
        ctx.setState({ [bind]: value }, () => {
          window.prefs[bind] = value
          if (this.props.children.props.onChange) {
            console.warn(
              'It is not recommended to have onChange with bind feature'
            )
            this.props.children.props.onChange(value)
          }
        })
      }
    })
  }
}

export default (props: any) =>
  props.bind ? (
    <ThemeDataContext.Consumer>
      {(data: any) => <ControlTransformer {...props} data={data} />}
    </ThemeDataContext.Consumer>
  ) : (
    <ControlTransformer {...props} />
  )

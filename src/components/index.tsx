import Button from './Button'
import Theme, { ThemeValueProvider } from './Theme'
import Input from './Input'
import View from './View'
import Icon from './Icon'
import Switch from './Switch'
import Text from './Text'
import Grid from './Grid'
import List from './List'
import CheckBox from './CheckBox'
import Select from './Select/Select'
import GridMultipleSelect from './Select/GridMultipleSelect'
import MultipleSelect from './Select/MultipleSelect'
import Modal from './Modal'
import Toggle from './Toggle'
import Calendar from './Calendar'
import DatePicker from './Calendar/DatePicker'
import * as React from 'react'
import ControlTransformer from './Advanced/ControlTransformer'
const omit = require('lodash/omit')

const transformControl = (Element: any) => {
  return class extends React.Component<any> {
    render() {
      return (
        <ControlTransformer
          bind={this.props.bind}
          valueKey={this.props.valueKey}
          defaultValue={this.props.defaultValue}
        >
          <Element {...omit(this.props, 'bind', 'valueKey', 'defaultValue')} />
        </ControlTransformer>
      )
    }
  }
}
const list: any = {
  Button,
  Theme,
  ThemeValueProvider,
  Grid,
  List,
  View,
  Icon,
  Text,
  Switch,
  Input,
  Select,
  MultipleSelect,
  CheckBox,
  GridMultipleSelect,
  Modal,
  Toggle,
  Calendar,
  DatePicker
}
const UI: any = {}
const keys = Object.keys(list)
for (let i = 0; i < keys.length; i++) {
  const keyString = keys[i].toString()
  UI[keyString] = transformControl(list[keyString])
}

export = UI

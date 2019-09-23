export = UI
export as namespace UI
declare namespace UI {
  interface BaseProps {
    display?: string
    float?: string
    variant?: string
    'flex-direction'?: string
    'justify-content'?: string
    background?: string
    width?: string
    height?: string
    margin?: string
    padding?: string
    'box-shadow'?: string
    border?: string
    // style?: any
    transition?: string
    position?: string
    visibility?: string
    color?: string
    opacity?: any
    ref?: any
    shouldAnimate?: boolean
    onClick?: (e: any) => void
    ['default-style']?: (theme: any) => string
    ['custom-style']?: (theme: any) => string
    cursor?: string
    overflow?: string
  }
  /**
   * ### UI | View Props
   * ---
   * display?: string
   *
   * float?: string
   *
   * variant?: string
   *
   * flex-direction?: string
   *
   * justify-content?: string
   *
   * background?: string
   *
   * width?: string
   *
   * height?: string
   *
   * margin?: string
   *
   * padding?: string
   *
   * box-shadow?: string
   *
   * border?: string
   *
   * transition?: string
   *
   * position?: string
   *
   * visibility?: string
   *
   * color?: string
   *
   * opacity?: any
   *
   * ref?: any
   *
   * shouldAnimate?: boolean
   *
   * onClick?: (e: any) => void
   *
   * default-style?: (theme: any) => string
   *
   * custom-style']?: (theme: any) => string
   *
   * cursor?: string
   *
   * overflow?: string
   *
   */
  const View: React.ElementType<BaseProps>

  interface ToggleProps extends BaseProps {
    label?: string
    headerBackground?: string
    isOpen: boolean
    onChange: Function
  }
  /**
   * ### UI | Toggle Props
   * ---
   * label?: string
   *
   * headerBackground?: string
   *
   * isOpen: boolean
   *
   * onChange: Function
   *
   */
  const Toggle: React.ElementType<ToggleProps>

  interface TextProps extends BaseProps {
    value?: string
  }
  /**
   * ### UI | Text Props
   * ---
   * value?: string
   *
   */
  const Text: React.ElementType<TextProps>

  interface SwitchInterface extends BaseProps {
    value?: boolean
    onChange?: any
    switchWidth?: string
    switchHeight?: string
    iconSize?: number
    primaryColor?: string
    secondaryColor?: string
  }
  /**
   * ### UI | Switch Props
   * ---
   * value?: boolean
   *
   * onChange?: any
   *
   * switchWidth?: string
   *
   * switchHeight?: string
   *
   * iconSize?: number
   *
   * primaryColor?: string
   *
   * secondaryColor?: string
   *
   */
  const Switch: React.ElementType<SwitchInterface>

  interface ModalProps extends BaseProps {
    open: boolean
    portalAddress?: string
  }
  /**
   * ### UI | Modal Props
   * ---
   * open: boolean
   *
   * portalAddress?: string
   *
   */
  const Modal: React.ElementType<ModalProps>

  interface ListProps extends BaseProps {
    items: Array<any>
    children: (item: any, ind: number) => React.ReactElement
  }
  /**
   * ### UI | List Props
   * ---
   * items: Array<any>
   *
   * children: (item: any, ind: number) => React.ReactElement
   *
   */
  const List: React.ElementType<ListProps>

  interface InputProps extends BaseProps {
    onChange?: (value: string) => void
    value?: string
    label?: string
    placeholder?: string
    type?: string
    required?: boolean
    autoComplete?: string
  }
  /**
   * ### UI | Input Props
   * ---
   * onChange?: (value: string) => void  

   * value?: string  

   * label?: string  

   * placeholder?: string  

   * type?: string  

   * required?: boolean  

   * autoComplete?: string  

   */
  const Input: React.ElementType<InputProps>

  interface IconProps extends BaseProps {
    name?: string
  }
  /**
   * ### UI | Icon Props
   * ---
   * name?: string
   *
   */
  const Icon: React.ElementType<IconProps>

  interface GridProps extends BaseProps {
    items: Array<any>
    children: (item: any, ind: number) => React.ReactElement
    column?: number
    'column-mobile'?: number
    'column-tablet'?: number
    'column-laptop'?: number
  }
  /**
   * Grid Props
   * ===
   * items: Array<any>
   *
   * children: (item: any, ind: number) => React.ReactElement
   *
   * column?: number
   *
   * column-mobile?: number
   *
   * column-tablet?: number
   *
   * column-laptop'?: number
   *
   */
  const Grid: React.ElementType<GridProps>

  interface CheckboxProps extends BaseProps {
    value: boolean
    onChange?: any
    inverted?: boolean
    label?: string
  }
  /**
   * ### UI | CheckBox Props
   * ---
   * value: boolean
   *
   * onChange?: any
   *
   * inverted?: boolean
   *
   * label?: string
   *
   */
  const CheckBox: React.ElementType<CheckboxProps>

  interface ButtonProps extends BaseProps {
    onClick?: (e: any) => void
    shouldAnimate?: boolean
    href?: string
    type?: string
  }
  /**
   * ### UI | Button Props
   * ---
   * onClick?: (e: any) => void
   *
   * shouldAnimate?: boolean
   *
   * href?: string
   *
   * type?: string
   *
   */
  const Button: React.ElementType<ButtonProps>

  interface GridMultipleSelectProps extends BaseProps {
    value: any[]
    onChange?: (item: any) => void
    column: number
    options: any[]
  }

  /**
   * ### UI | Grid Multiple Select Props
   * ---
   * value: any[]
   *
   * onChange?: (item: any) => void
   *
   * column: number
   *
   * options: any[]
   *
   */
  const GridMultipleSelect: React.ElementType<GridMultipleSelectProps>

  interface SelectProps extends BaseProps {
    options: Array<any>
    'dark-background-level'?: any
    customViewItem?: (item: any) => any
    selectedItemView?: (item: any) => any
    value: any
    valueKey?: string
    onChange: (item: any) => void
    style?: any
    label?: string
    popupStyle?: any
    plain?: boolean
    labelKey?: string
    required?: boolean
  }
  /**
   * ### UI | Select Props
   * ---
   * options: Array<any>
   *
   * dark-background-level ?: any
   *
   * customViewItem?: (item: any) => any
   *
   * selectedItemView?: (item: any) => any
   *
   * value: any
   *
   * valueKey?: string
   *
   * onChange: (item: any) => void
   *
   * style?: any
   *
   * label?: string
   *
   * popupStyle?: any
   *
   * plain?: boolean
   *
   * labelKey?: string
   *
   * required?: boolean
   *
   */
  const Select: React.ElementType<SelectProps>

  interface CalendarProps extends BaseProps {
    isStatic?: boolean
    value?: string
    onChange?: any
    customHeader?: (date: string) => string
    customMonthLabel?: (month: string) => string
    customDayOfWeek?: string[]
  }
  /**
   * ### UI | Calendar Props
   * ---
   * isStatic?: boolean
   *
   * value?: string
   *
   * onChange?: any
   *
   * customHeader?: (date: string) => string
   *
   * customMonthLabel?: (month: string) => string
   *
   * customDayOfWeek?: string[]
   *
   */
  const Calendar: React.ElementType<CalendarProps>

  interface PopupProps extends BaseProps {
    trigger: any
    children: any
    direction: 'up' | 'down'
    showPopup: boolean
    popupStyle?: any
    animation?: number
  }
  /**
   * ### UI | Popup Props
   * ---
   * trigger: any
   *
   * children: any
   *
   * direction: 'up' | 'down'
   *
   * showPopup: boolean
   *
   * popupStyle?: any
   *
   * animation?: number
   *
   */
  const Popup: React.ElementType<PopupProps>
  interface ThemeProps {
    values?: {}
  }
  /**
   * ### UI | Theme Props
   * ---
   * values?: {}
   * ---
   * If not specified, default `values` will be applied
   *
   */
  const Theme: React.ElementType<ThemeProps>

  interface DatePickerProps extends UI.BaseProps {
    value: string
    onChange?: any
    customHeader?: (date: string) => string
    customMonthLabel?: (month: string) => string
    customDayOfWeek?: string[]
    customTextDate?: (date: string) => string
  }
  /**
   * ### UI | DatePicker Props
   * ---
   * value: string
   *
   * onChange?: any
   *
   * customHeader?: (date: string) => string
   *
   * customMonthLabel?: (month: string) => string
   *
   * customDayOfWeek?: string[]
   *
   * customTextDate?: (date: string) => string
   *
   */
  const DatePicker: React.ElementType<DatePickerProps>

  /**
   * ### UI | ThemeValueProvider
   * ---
   * This will return the theme value
   */
  const ThemeValueProvider: React.ElementType<any>
}

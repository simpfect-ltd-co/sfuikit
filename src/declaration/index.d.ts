export = UI
export as namespace UI
/**
 * ### UI Core Features
 * ---
 * #### All the UI elements has 2 main features
 *
 * - View :: Responsive css with multiple devices (mobile, tablet)
 * You can just add `-mobile` to specify the value of the style you want to apply only for mobile
 * For example: `width-mobile="54px"` go along with `width="20px"` tell UI that you want the width in mobile device is `54px`
 * Same with `-tablet`
 * - Data :: Binding
 * Instead of `value` and `onChange` all the time, you can just add a `bind` key to any UI Control (Switch, Toggle, Input, Select,...any UI that has `value` and `onChange`) props
 * UI Control will automatically store its internal `value` without requiring you add a state into the parent view
 * You can get the value of that UI Control later with `UI.getViewState('your-bind-key')` or you can update the `value` manually with `UI.setViewSate('your-bind-key','next-value')`
 * ---
 *
 * > NOTE: This also works with other UI View
 */
declare namespace UI {
  interface BaseProps {
    variant?: string
    style?: any
    ref?: any
    shouldAnimate?: boolean
    onClick?: Function
    'default-style'?: (theme: any) => string
    'custom-style'?: (theme: any) => string
    'dark-style'?: (theme: any) => string
    id?: string
    className?: string

    'align-items'?: string
    'flex-direction'?: string
    'justify-content'?: string
    animation?: string
    'animation-delay'?: string
    'animation-direction'?: string
    'animation-duration'?: string
    'animation-iteration-count'?: string
    'animation-name'?: string
    'animation-play-state'?: string
    'animation-timing-function'?: string
    azimuth?: string
    'backface-visibility'?: string
    background?: string
    'background-attachment'?: string
    'background-clip'?: string
    'background-color'?: string
    'background-image'?: string
    'background-origin'?: string
    'background-position'?: string
    'background-repeat'?: string
    'background-size'?: string
    bleed?: string
    border?: string
    'border-bottom'?: string
    'border-bottom-color'?: string
    'border-bottom-left-radius'?: string
    'border-bottom-right-radius'?: string
    'border-bottom-style'?: string
    'border-bottom-width'?: string
    'border-collapse'?: string
    'border-color'?: string
    'border-image'?: string
    'border-image-outset'?: string
    'border-image-repeat'?: string
    'border-image-source'?: string
    'border-image-width'?: string
    'border-left'?: string
    'border-left-color'?: string
    'border-left-style'?: string
    'border-left-width'?: string
    'border-radius'?: string
    'border-right'?: string
    'border-right-color'?: string
    'border-right-style'?: string
    'border-right-width'?: string
    'border-spacing'?: string
    'border-style'?: string
    'border-top'?: string
    'border-top-color'?: string
    'border-top-left-radius'?: string
    'border-top-right-radius'?: string
    'border-top-style'?: string
    'border-top-width'?: string
    'border-width'?: string
    bottom?: string
    'box-shadow'?: string
    'box-sizing'?: string
    'caption-side'?: string
    clear?: string
    clip?: string
    color?: string
    'column-count'?: string
    'column-fill'?: string
    'column-gap'?: string
    'column-rule'?: string
    'column-rule-color'?: string
    'column-rule-style'?: string
    'column-rule-width'?: string
    'column-span'?: string
    'column-width'?: string
    columns?: string
    content?: string
    'counter-increment'?: string
    'counter-reset'?: string
    cursor?: string
    direction?: string
    display?: string
    'empty-cells'?: string
    float?: string
    font?: string
    'font-family'?: string
    'font-size'?: string
    'font-size-adjust'?: string
    'font-stretch'?: string
    'font-style'?: string
    'font-variant'?: string
    'font-weight'?: string
    height?: string
    hyphens?: string
    'image-rendering'?: string
    left?: string
    'letter-spacing'?: string
    'line-height'?: string
    'list-style'?: string
    'list-style-image'?: string
    'list-style-position'?: string
    'list-style-type'?: string
    margin?: string
    'margin-bottom'?: string
    'margin-left'?: string
    'margin-right'?: string
    'margin-top'?: string
    'marker-offset'?: string
    marks?: string
    'max-height'?: string
    'max-width'?: string
    'min-height'?: string
    'min-width'?: string
    order?: string
    opacity?: string
    orphans?: string
    outline?: string
    'outline-color'?: string
    'outline-offset'?: string
    'outline-style'?: string
    'outline-width'?: string
    overflow?: string
    'overflow-x'?: string
    padding?: string
    'padding-bottom'?: string
    'padding-left'?: string
    'padding-right'?: string
    'padding-top'?: string
    'page-break-after'?: string
    'page-break-before'?: string
    'page-break-inside'?: string
    perspective?: string
    'perspective-origin'?: string
    position?: string
    quotes?: string
    resize?: string
    right?: string
    'tab-size'?: string
    'table-layout'?: string
    'text-align'?: string
    'text-align-last'?: string
    'text-decoration'?: string
    'text-decoration-color'?: string
    'text-decoration-line'?: string
    'text-decoration-style'?: string
    'text-indent'?: string
    'text-shadow'?: string
    'text-transform'?: string
    top?: string
    transform?: string
    'transform-origin'?: string
    'transform-style'?: string
    transition?: string
    'transition-delay'?: string
    'transition-duration'?: string
    'transition-property'?: string
    'transition-timing-function'?: string
    'vertical-align'?: string
    visibility?: string
    'white-space'?: string
    widows?: string
    width?: string
    'word-spacing'?: string
    'word-wrap'?: string
    'z-index'?: string
  }
  /**
   * ### UI | View Props
   * ---
   *
   * UI View has all the css properties and some custom props as below
   *
   * ---
   *
   * ref?: any
   *
   * shouldAnimate?: boolean
   *
   * default-style?: (theme: any) => string
   *
   * custom-style?: (theme: any) => string
   *
   * dark-style?: (theme: any) => string
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
    onClick?: Function
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
    selectedItemView?: Function
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
  const MultipleSelect: React.ElementType<SelectProps>
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
    animationTime?: number
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
   *
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

  const setViewState: (key: string, value: any) => void
  const getViewState: (key: string) => any
}

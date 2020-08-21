import { ReactNode, CSSProperties, RefObject, ChangeEvent } from 'react';
import {
  ThemeBackgroundColor,
  ThemePaddingSpacing,
  ThemeMarginSpacing,
  ThemeWidthOptions,
  ThemeMaxWidthOptions,
  ThemeMinWidthOptions,
  ThemeHeightOptions,
  ThemeMaxHeightOptions,
  ThemeMinHeightOptions,
  ThemeLetterSpacing,
  ThemeBoxShadow,
  ThemeBorderRadiusTopOptions,
  ThemeBorderRadiusBottomOptions,
  ThemeBorderRadiusRightOptions,
  ThemeBorderRadiusLeftOptions,
  ThemeBorderRadiusOptions,
  ThemeCursor,
  ThemeTextColor,
  ThemeFont,
  ThemeOpacity,
  ThemeFontSize,
  ThemeFillColor,
  ThemeBorderColor,
  ThemeLineHeight,
  ThemePositionTopOptions,
  ThemePositionBottomOptions,
  ThemePositionRightOptions,
  ThemePositionLeftOptions,
  Float,
  Display,
  TextAlign,
  zIndex,
  TextDecoration,
  PointerEvents,
  BorderStyle,
  Outline,
  PositionOptions,
  ThemeFlexOptions,
  FlexDirectionOptions,
  FlexWrapOptions,
  JustifyContentOptions,
  ThemeFlexGrowOptions,
  ThemeFlexShrinkOptions,
  ThemePlaceholderColor,
  AlignItemsOptions,
  Overflow,
  TransitionPropertyOptions,
  TransitionTimingFunctionOptions,
  TransitionDurationOptions,
  ThemeBorderWidthOptions,
  ThemeBorderWidthTopOptions,
  ThemeBorderWidthBottomOptions,
  ThemeBorderWidthLeftOptions,
  ThemeBorderWidthRightOptions,
  WhiteSpace,
} from './tailwind.types';

export interface HTMLElementProps {
  // Primitive Props
  id?: string;
  cursor?: ThemeCursor;
  dataTestId?: string;
  pointerEvents?: PointerEvents;
  // TODO: remove className when refactor is complete
  className?: string;
  // LayoutProps
  display?: Display;
  flex?: FlexOptions;
  position?: Position;
  zIndex?: zIndex;
  width?: ThemeWidthWithMinMax;
  height?: ThemeHeightWithMinMax;
  margin?: ThemeMarginSpacing;
  padding?: ThemePaddingSpacing;
  float?: Float;
  // FontProps
  font?: ThemeFont;
  /* base font size assigned in index.css */
  fontSize?: ThemeFontSize;
  leading?: ThemeLineHeight;
  textAlign?: TextAlign;
  textDecoration?: TextDecoration;
  tracking?: ThemeLetterSpacing;
  textColor?: ThemeTextColor | any;
  whiteSpace?: WhiteSpace;
  // AppearanceProps
  opacity?: ThemeOpacity;
  shadow?: ThemeBoxShadow;
  borderRadius?: ThemeBorderRadius;
  overflow?: Overflow;
  /* style is for special circumstances only and should be used sparingly */
  style?: CSSProperties;
  // BorderProps
  borderStyle?: BorderStyle;
  borderWidth?: ThemeBorderWidth;
  borderColor?: ThemeBorderColor;
  outline?: Outline;
  // Background
  bgColor?: ThemeBackgroundColor | any;
  // Transition
  transition?: TransitionProps | TransitionProps[];
}

export interface TransitionProps {
  property?: TransitionPropertyOptions
  timing?: TransitionTimingFunctionOptions
  duration?: TransitionDurationOptions
}

// Union prop types
export type PositionBase =
  | PositionOptions
  | ThemePositionTopOptions
  | ThemePositionBottomOptions
  | ThemePositionLeftOptions
  | ThemePositionRightOptions;
export type Position = PositionBase | PositionBase[];

export type ThemeBorderRadiusBase =
  | ThemeBorderRadiusOptions
  | ThemeBorderRadiusTopOptions
  | ThemeBorderRadiusBottomOptions
  | ThemeBorderRadiusLeftOptions
  | ThemeBorderRadiusRightOptions;
export type ThemeBorderRadius = ThemeBorderRadiusBase | ThemeBorderRadiusBase[];

export type ThemeBorderWidthBase =
  | ThemeBorderWidthOptions
  | ThemeBorderWidthTopOptions
  | ThemeBorderWidthBottomOptions
  | ThemeBorderWidthLeftOptions
  | ThemeBorderWidthRightOptions;
export type ThemeBorderWidth = ThemeBorderWidthBase | ThemeBorderWidthBase[];

export type ThemeWidthsBase =
  | ThemeWidthOptions
  | ThemeMaxWidthOptions
  | ThemeMinWidthOptions;
export type ThemeWidth = ThemeWidthOptions | ThemeWidthOptions[];
export type ThemeWidthWithMinMax = ThemeWidthsBase | ThemeWidthsBase[];

export type ThemeHeightsBase =
  | ThemeHeightOptions
  | ThemeMaxHeightOptions
  | ThemeMinHeightOptions;
export type ThemeHeight = ThemeHeightOptions | ThemeHeightOptions[];
export type ThemeHeightWithMinMax = ThemeHeightsBase | ThemeHeightsBase[];

export type FlexParentBase =
  | JustifyContentOptions
  | AlignItemsOptions
  | FlexWrapOptions
  | FlexDirectionOptions
  | ThemeFlexOptions;
export type FlexParent = FlexParentBase | FlexParentBase[];

export type FlexChildBase =
  | ThemeFlexOptions
  | ThemeFlexGrowOptions
  | ThemeFlexShrinkOptions;
export type FlexChild = FlexChildBase | FlexChildBase[];

export type FlexOptionsBase = FlexParent | FlexChild;
export type FlexOptions = FlexOptionsBase | FlexOptionsBase[];

///////////////////////////////////////////////////////////
// Primitive elements
///////////////////////////////////////////////////////////

Text ///////////////////////////////////////////////////
export interface TextProps {
  forwardRef?: RefObject<HTMLParagraphElement>;
  children: ReactNode;
  onClick?(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>): void;
}

export type HeaderType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
  forwardRef?: RefObject<HTMLHeadingElement>;
  children: ReactNode;
  /* determines fontSize unless "fontSize" prop is passed */
  type?: HeaderType;
  onClick?: Function;
}

// Anchor //////////////////////////////////////////////////
export interface AnchorProps {
  href?: string;
  target?: AnchorTarget;
  preventDefault?: boolean;
}

export interface AnchorTagProps {
  forwardRef?: RefObject<HTMLAnchorElement>;
  children: ReactNode;
  onClick?: Function;
}

export type AnchorTarget = '_self' | '_blank' | '_parent' | '_top';

// Button ///////////////////////////////////////////////////////
export type ButtonSizes = 'sm' | 'md' | 'lg';
export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'white';
export type ButtonWidth = 'w-auto' | 'w-full';

export interface ButtonIcon {
  // iconName?: IconName;
  iconWidth?: ThemeWidth;
  iconColor?: ThemeFillColor | any;
  iconRight?: boolean;
}

export interface ButtonProps {
  forwardRef?: RefObject<HTMLButtonElement>;
  size?: ButtonSizes;
  disabled?: boolean;
  children: ReactNode;
  onClick?: Function;
}

// Image ////////////////////////////////////////////////////////
export interface ImageProps {
  forwardRef?: RefObject<HTMLImageElement>;
  src: string;
  alt?: string;
}

// Horizontal Rule //////////////////////////////////////////////
export interface HorizontalRuleProps { }

// SVG //////////////////////////////////////////////////////////
export interface SvgProps {
  forwardRef?: RefObject<HTMLOrSVGElement>;
  title: string;
  svg: ReactNode;
  viewBox?: string;
}

// Icon /////////////////////////////////////////////////////////
export interface IconProps {
  // name: IconName;
  fill?: ThemeFillColor | any;
  onClick?: Function;
}

// Input ////////////////////////////////////////////////////////
type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export interface InputProps {
  forwardRef?: RefObject<HTMLInputElement>;
  key?: string | number;
  disabled?: boolean;
  type: InputType;
  value?: string;
  placeholder?: string;
  placeholderColor?: ThemePlaceholderColor | any;
  name?: string;
  checked?: boolean;
  readOnly?: boolean;
  onFocus?(event: ChangeEvent<HTMLInputElement>): void;
  onBlur?(event: ChangeEvent<HTMLInputElement>): void;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  ariaLabel?: string;
  hasError?: boolean;
}

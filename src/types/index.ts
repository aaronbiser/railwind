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
  ThemeFontWeight,
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

////////////////////////////////////
// Base props

export interface HTMLElementProps<T> {
  forwardRef?: RefObject<T>;
  // Primitive Props
  id?: string;
  cursor?: ThemeCursor;
  dataTestId?: string;
  pointerEvents?: PointerEvents;
  className?: string;
  /* style is for special circumstances only and should be used sparingly */
  style?: CSSProperties;
  transition?: TransitionProps
}

export interface ColorProps {
  textColor?: ThemeTextColor;
  borderColor?: ThemeBorderColor;
  bgColor?: ThemeBackgroundColor;
}

export interface FontProps {
  font?: ThemeFont;
  /* base font size assigned in index.css */
  fontSize?: ThemeFontSize;
  fontWeight?: ThemeFontWeight;
  leading?: ThemeLineHeight;
  textAlign?: TextAlign;
  textDecoration?: TextDecoration;
  tracking?: ThemeLetterSpacing;
  whiteSpace?: WhiteSpace;
}

export interface LayoutProps {
  width?: ThemeWidthWithMinMax;
  height?: ThemeHeightWithMinMax;
  display?: Display;
  flex?: FlexOptions;
  position?: Position;
  zIndex?: zIndex;
  margin?: ThemeMarginSpacing;
  padding?: ThemePaddingSpacing;
  float?: Float;
  overflow?: Overflow;
}

export interface AppearanceProps {
  opacity?: ThemeOpacity;
  shadow?: ThemeBoxShadow;
  outline?: Outline;
  borderRadius?: ThemeBorderRadius;
  borderStyle?: BorderStyle;
  borderWidth?: ThemeBorderWidth;
}

export interface TransitionProps {
  property?: TransitionPropertyOptions
  timing?: TransitionTimingFunctionOptions
  duration?: TransitionDurationOptions
}

interface AllHTMLElementProps<T> extends HTMLElementProps<T>, ColorProps, FontProps, LayoutProps, AppearanceProps { }

///////////////////////////////////////////////////////////
// Primitive elements
///////////////////////////////////////////////////////////

type ReferrerPolicy = 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'unsafe-url'

// Div ///////////////////////////////////////////////////
export type HTMLElements = 'div' | 'span' | 'ul' | 'ol' | 'li' | 'form';

export interface DivProps extends AllHTMLElementProps<HTMLDivElement> {
  as?: HTMLElements;
  /* If true applies global responsive width and spacing styles */
  container?: boolean;
  onClick?(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
  children?: ReactNode;
}

// Text ///////////////////////////////////////////////////
export interface TextProps extends AllHTMLElementProps<HTMLParagraphElement> {
  children: ReactNode;
  onClick?(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>): void;
}

// export type HeaderType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// export interface HeadingProps extends TextProps {
//   /* determines fontSize unless "fontSize" prop is passed */
//   type?: HeaderType;
//   onClick?(event: React.MouseEvent<HTMLHeadingElement, MouseEvent>): void;
// }

// Anchor //////////////////////////////////////////////////
type AnchorTarget = '_self' | '_blank' | '_parent' | '_top';

type Rel = 'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'next' | 'nofollow' | 'noreferrer' | 'noopener' | 'prev' | 'search' | 'tag'

export interface AnchorProps extends AllHTMLElementProps<HTMLAnchorElement> {
  href?: string;
  hreflang?: string;
  media?: string;
  ping?: string;
  target?: AnchorTarget;
  referrerpolicy?: ReferrerPolicy;
  rel?: Rel;
  type?: string;
  download?: string;
  preventDefault?: boolean;
  children: ReactNode;
  onClick?(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void;
}

// Image ////////////////////////////////////////////////////////
type CrossOrigin = 'anonymous' | 'use-credentials'

export interface ImageProps extends
  HTMLElementProps<HTMLImageElement>,
  ColorProps,
  LayoutProps,
  AppearanceProps {
  src: string;
  alt?: string;
  ismap?: boolean;
  referrerpolicy?: ReferrerPolicy;
  longdesc?: string;
  sizes?: string;
  srcset?: string;
  crossorigin?: CrossOrigin;
  onClick?(event: React.MouseEvent<HTMLImageElement, MouseEvent>): void;
}

// SVG //////////////////////////////////////////////////////////
// export interface SvgProps {
//   forwardRef?: RefObject<HTMLOrSVGElement>;
//   title: string;
//   svg: ReactNode;
//   viewBox?: string;
// }

// Icon /////////////////////////////////////////////////////////
// export interface IconProps {
//   // name: IconName;
//   fill?: ThemeFillColor;
//   onClick?: Function;
// }

// Button ///////////////////////////////////////////////////////
export type ButtonSizes = 'sm' | 'md' | 'lg' | 'xl';

// export interface ButtonIcon {
//   // iconName?: IconName;
//   iconWidth?: ThemeWidth;
//   iconColor?: ThemeFillColor;
//   iconRight?: boolean;
// }

export interface ButtonProps extends AllHTMLElementProps<HTMLButtonElement> {
  size?: ButtonSizes;
  disabled?: boolean;
  children?: ReactNode;
  href?: string;
  target?: string;
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

// Horizontal Rule //////////////////////////////////////////////
// export interface HorizontalRuleProps { }

// Input ////////////////////////////////////////////////////////
// type InputType =
//   | 'button'
//   | 'checkbox'
//   | 'color'
//   | 'date'
//   | 'datetime-local'
//   | 'email'
//   | 'file'
//   | 'hidden'
//   | 'image'
//   | 'month'
//   | 'number'
//   | 'password'
//   | 'radio'
//   | 'range'
//   | 'reset'
//   | 'search'
//   | 'submit'
//   | 'tel'
//   | 'text'
//   | 'time'
//   | 'url'
//   | 'week';

// export interface InputProps {
//   forwardRef?: RefObject<HTMLInputElement>;
//   key?: string | number;
//   disabled?: boolean;
//   type: InputType;
//   value?: string;
//   placeholder?: string;
//   placeholderColor?: ThemePlaceholderColor;
//   name?: string;
//   checked?: boolean;
//   readOnly?: boolean;
//   onFocus?(event: ChangeEvent<HTMLInputElement>): void;
//   onBlur?(event: ChangeEvent<HTMLInputElement>): void;
//   onChange?(event: ChangeEvent<HTMLInputElement>): void;
//   ariaLabel?: string;
//   hasError?: boolean;
// }

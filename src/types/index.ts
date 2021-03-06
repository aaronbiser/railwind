import { ReactNode, CSSProperties, RefCallback } from 'react';
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
  ThemeOpacityOptions,
  ThemeBackgroundColorOptions,
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

export interface DataTestId { dataTestId?: string; }
export interface UseDefaultStyles { useDefaultStyles?: boolean; }
export interface RailwindBase<RwStyleProps, Element> extends DataTestId {
  forwardRef?: RefCallback<HTMLElement>;
  id?: string;
  style?: CSSProperties;
  className?: string;
  rwStyle?: RwStyleProps;
  onClick?(event: React.MouseEvent<Element, MouseEvent>): void;
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

  pointerEvents?: PointerEvents;
  cursor?: ThemeCursor;
  transition?: TransitionProps
}

export interface TransitionProps {
  property?: TransitionPropertyOptions
  timing?: TransitionTimingFunctionOptions
  duration?: TransitionDurationOptions
}

export interface AllHTMLElementProps extends ColorProps, FontProps, LayoutProps, AppearanceProps { }

///////////////////////////////////////////////////////////
// Primitive elements
///////////////////////////////////////////////////////////

// Div ///////////////////////////////////////////////////
export type HTMLElements = 'div' | 'span' | 'ul' | 'ol' | 'li' | 'form';


export interface DivProps extends
RailwindBase<AllHTMLElementProps, HTMLDivElement> {
  as?: HTMLElements;
  /* If true applies global responsive width and spacing styles */
  container?: boolean;
  animatedStyle?: CSSProperties;
  children?: ReactNode;
}

export interface BoxProps extends DivProps {}
export interface FlexProps extends Omit<DivProps, 'display'> {}

// Text ///////////////////////////////////////////////////
export interface TextProps extends
  RailwindBase<AllHTMLElementProps, HTMLParagraphElement> {
  children: ReactNode;
}

// export type HeaderType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// export interface HeadingProps extends TextProps {
//   /* determines fontSize unless "fontSize" prop is passed */
//   type?: HeaderType;
//   onClick?(event: React.MouseEvent<HTMLHeadingElement, MouseEvent>): void;
// }

// Anchor //////////////////////////////////////////////////
export interface AnchorProps extends
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  RailwindBase<AllHTMLElementProps, HTMLAnchorElement> {
  preventDefault?: boolean;
  children: ReactNode;
}

// Image ////////////////////////////////////////////////////////
export interface ImageProps extends
  React.ImgHTMLAttributes<HTMLImageElement>,
  RailwindBase<ColorProps & LayoutProps & AppearanceProps, HTMLImageElement> { }

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
  
  export interface ButtonProps extends
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  RailwindBase<AllHTMLElementProps, HTMLButtonElement> {
    size?: ButtonSizes;
    href?: string;
    target?: string;
    children?: ReactNode;
  }
  
  // Dropdown ///////////////////////////////////////////////////////
  export interface DropDownAlignment {
    vertical: 'top' | 'bottom',
    horizontal: 'left' | 'right'
  }
  
  export interface DropdownToggleProps extends DataTestId, UseDefaultStyles {
    /**
     * Function that returns ReactNode
    */
    toggle: ((isActive: boolean) => ReactNode) | ReactNode,
    dropdownContent: ReactNode,
    dropdownAlignment?: DropDownAlignment,
    /** 
     * Render the dropdown as fixed position and not inline with the toggle element
     * Useful for when the dropdown may be cut off when rendered inline - Ex: trade table cell edit dropdown
    */
    dropdownPosition?: 'fixed' | 'absolute'
  }

// Modal //////////////////////////////////////////////
export type ModalSize = 'SM' | 'MD' | 'LG'
export interface ModalProps extends UseDefaultStyles {
  toggle?: () => void
  animated?: boolean
  onHide?: Function
  size?: ModalSize
  modalContent: ReactNode
  bgOverlayOpacity?: ThemeOpacityOptions
  bgOverlayColor?: ThemeBackgroundColorOptions
  showClose?: boolean
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

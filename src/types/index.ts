import { ReactNode, CSSProperties, RefCallback, PropsWithChildren, ReactHTML, RefObject } from 'react';
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
  TextOverflow,
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
  TextTransform,
  Select
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
type OmittedHTMLProps = "style" | "children"

export interface DataTestId { dataTestId?: string; }

export interface RailwindBase<RwStyles, Element> extends DataTestId {
  forwardRef?: RefCallback<Element> | RefObject<Element>;
  id?: string;
  style?: CSSProperties;
  className?: string;
  rwStyle?: RwStyles;
  onClick?(event: React.MouseEvent<Element, MouseEvent>): void;
}

export interface ColorProps {
  fill?: ThemeFillColor;
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
  textOverflow?: TextOverflow;
  textTransform?: TextTransform;
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
  transition?: TransitionProps;
  select?: Select
}

export interface TransitionProps {
  property?: TransitionPropertyOptions
  timing?: TransitionTimingFunctionOptions
  duration?: TransitionDurationOptions
}

export interface AllHTMLElementProps extends ColorProps, FontProps, LayoutProps, AppearanceProps { }

export interface RailwindStyles<T> { rwStyle?: T }

///////////////////////////////////////////////////////////
// Primitive elements
///////////////////////////////////////////////////////////

// Div ///////////////////////////////////////////////////
export type HTMLElements = keyof ReactHTML
export type HTMLHeaderElements = keyof Pick<ReactHTML, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>

export interface DivProps extends
  Omit<Partial<HTMLDivElement>, OmittedHTMLProps>,
  PropsWithChildren<RailwindBase<AllHTMLElementProps, HTMLDivElement>> {
  as?: HTMLElements;
  /* If true applies global responsive width and spacing styles */
  container?: boolean;
  animatedStyle?: CSSProperties;
}

// Text ///////////////////////////////////////////////////
export interface TextProps extends
  Omit<Partial<HTMLParagraphElement>, OmittedHTMLProps>,
  PropsWithChildren<RailwindBase<AllHTMLElementProps, HTMLParagraphElement>> {}

// Header ///////////////////////////////////////////////////
export interface HeaderProps extends
  Omit<Partial<HTMLHeadingElement>, OmittedHTMLProps>,
  PropsWithChildren<RailwindBase<AllHTMLElementProps, HTMLHeadingElement>> {
    as?: HTMLHeaderElements;
  }

// Anchor //////////////////////////////////////////////////
export interface AnchorProps extends
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  PropsWithChildren<RailwindBase<AllHTMLElementProps, HTMLAnchorElement>> {
  preventDefault?: boolean;
}

// Input //////////////////////////////////////////////////
export interface InputProps extends
  React.InputHTMLAttributes<HTMLInputElement>,
  RailwindBase<AllHTMLElementProps, HTMLInputElement> {}

// Label //////////////////////////////////////////////////
export interface LabelProps extends
  React.LabelHTMLAttributes<HTMLLabelElement>,
  PropsWithChildren<RailwindBase<AllHTMLElementProps, HTMLLabelElement>> {}

// Image ////////////////////////////////////////////////////////
export interface ImageProps extends
  React.ImgHTMLAttributes<HTMLImageElement>,
  RailwindBase<ColorProps & LayoutProps & AppearanceProps, HTMLImageElement> { }

// Table //////////////////////////////////////////////////
export interface TableProps extends
React.TableHTMLAttributes<HTMLTableElement>,
PropsWithChildren<RailwindBase<AllHTMLElementProps, HTMLTableElement>> {}

export interface TableRowProps extends
React.TableHTMLAttributes<HTMLTableRowElement>,
PropsWithChildren<RailwindBase<AllHTMLElementProps, HTMLTableRowElement>> {}

export interface TableCellProps extends
React.TableHTMLAttributes<HTMLTableCellElement>,
PropsWithChildren<RailwindBase<AllHTMLElementProps, HTMLTableCellElement>> {
  as: 'td' | 'th'
}

// Svg //////////////////////////////////////////////////
export interface SvgProps extends
  React.SVGAttributes<SVGElement>,
  RailwindBase<ColorProps & LayoutProps & AppearanceProps, SVGElement> {
    /** Required to render properly - Example: "0 0 24 12" */
    viewBox: string
  }

// Button ///////////////////////////////////////////////////////
export type ButtonSizes = 'sm' | 'md' | 'lg' | 'xl';
  
export interface ButtonProps extends
  RailwindStyles<AllHTMLElementProps>,
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  PropsWithChildren<RailwindBase<AllHTMLElementProps, HTMLButtonElement>> {
    size?: ButtonSizes,
    href?: string,
    target?: string,
    useDefaultStyles?: boolean
  }

  // Svg //////////////////////////////////////////////////
export interface IconProps extends 
Pick<SvgProps, 'viewBox' | 'name'>,
Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target'>,
RailwindBase<Pick<ColorProps, 'fill'> & Pick<LayoutProps, 'height' | 'width'> & Pick<AppearanceProps, 'opacity' | 'cursor'>, SVGElement> {
  /** Icons should contain only a single path - SVG icons can be flattened using a utility such as https://jakearchibald.github.io/svgomg/ */
  path: string
}
  
// Dropdown ///////////////////////////////////////////////////////
export interface DropDownAlignment {
  vertical: 'top' | 'bottom',
  horizontal: 'left' | 'right'
}

export interface DropdownRailwindStyles {
  dropdownToggle?: ((isActive: boolean) => AllHTMLElementProps) | null,
  dropdownContent?: AllHTMLElementProps | null
}

export interface DropdownToggleProps extends RailwindStyles<DropdownRailwindStyles>, DataTestId {
  /** Function that returns ReactNode */
  toggle: ((isActive: boolean) => ReactNode) | ReactNode,
  dropdownContent: ReactNode,
  dropdownAlignment?: DropDownAlignment,
  /** Render the dropdown as fixed position and not inline with the toggle element
   * Useful for when the dropdown may be cut off when rendered inline - Ex: trade table cell edit dropdown
  */
  dropdownPosition?: 'fixed' | 'absolute',
  useDefaultStyles?: boolean
}

// Toggle Switch //////////////////////////////////////////////
export interface ToggleSwitchRailwindStyles {
  toggleParent?: AllHTMLElementProps | null,
  toggleLabel?: AllHTMLElementProps | null
}

export interface ToggleSwitchProps extends RailwindBase<ToggleSwitchRailwindStyles, HTMLDivElement> {
  isToggled: boolean
  leftSide?: ReactNode
  leftSideText?: string
  rightSide?: ReactNode
  rightSideText?: string
}

// Modal //////////////////////////////////////////////
export type ModalSize = 'SM' | 'MD' | 'LG' | ThemeWidthWithMinMax

export interface ModalRailwindStyles {
  modalContent?: AllHTMLElementProps | null,
  modalBackground?: ThemeBackgroundColor | null,
  modalOpaciity?: ThemeOpacity | null,
}

export interface ModalProps extends RailwindStyles<ModalRailwindStyles>, PropsWithChildren<DataTestId> {
  animated?: boolean,
  toggle: Function,
  onHide?: Function,
  size?: ModalSize,
  modalContent: ReactNode,
  useDefaultStyles?: boolean
}

// Tabbed Panels //////////////////////////////////////////////
export interface TabbedPanelsProps extends
  RailwindStyles<AllHTMLElementProps | null>, 
  PropsWithChildren<DataTestId> {
    index?: number,
    setIndex?: React.Dispatch<React.SetStateAction<number>>
  }
  
  export interface TabsProps extends 
  RailwindStyles<AllHTMLElementProps | null>, 
  PropsWithChildren<DataTestId> {
  }
  
  export interface TabProps extends 
  RailwindStyles<AllHTMLElementProps | null>, 
  PropsWithChildren<DataTestId> {
  }
  
  export interface TabPanelProps extends 
    RailwindStyles<AllHTMLElementProps | null>, 
    PropsWithChildren<DataTestId> {
  }
  

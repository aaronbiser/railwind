import { ReactNode, CSSProperties, RefCallback } from 'react';
import { ThemeBackgroundColor, ThemePaddingSpacing, ThemeMarginSpacing, ThemeWidthOptions, ThemeMaxWidthOptions, ThemeMinWidthOptions, ThemeHeightOptions, ThemeMaxHeightOptions, ThemeMinHeightOptions, ThemeLetterSpacing, ThemeBoxShadow, ThemeBorderRadiusTopOptions, ThemeBorderRadiusBottomOptions, ThemeBorderRadiusRightOptions, ThemeBorderRadiusLeftOptions, ThemeBorderRadiusOptions, ThemeCursor, ThemeTextColor, ThemeFont, ThemeOpacity, ThemeFontSize, ThemeFontWeight, ThemeBorderColor, ThemeLineHeight, ThemePositionTopOptions, ThemePositionBottomOptions, ThemePositionRightOptions, ThemePositionLeftOptions, Float, Display, TextAlign, zIndex, TextDecoration, PointerEvents, BorderStyle, Outline, PositionOptions, ThemeFlexOptions, FlexDirectionOptions, FlexWrapOptions, JustifyContentOptions, ThemeFlexGrowOptions, ThemeFlexShrinkOptions, AlignItemsOptions, Overflow, TransitionPropertyOptions, TransitionTimingFunctionOptions, TransitionDurationOptions, ThemeBorderWidthOptions, ThemeBorderWidthTopOptions, ThemeBorderWidthBottomOptions, ThemeBorderWidthLeftOptions, ThemeBorderWidthRightOptions, WhiteSpace } from './tailwind.types';
export declare type PositionBase = PositionOptions | ThemePositionTopOptions | ThemePositionBottomOptions | ThemePositionLeftOptions | ThemePositionRightOptions;
export declare type Position = PositionBase | PositionBase[];
export declare type ThemeBorderRadiusBase = ThemeBorderRadiusOptions | ThemeBorderRadiusTopOptions | ThemeBorderRadiusBottomOptions | ThemeBorderRadiusLeftOptions | ThemeBorderRadiusRightOptions;
export declare type ThemeBorderRadius = ThemeBorderRadiusBase | ThemeBorderRadiusBase[];
export declare type ThemeBorderWidthBase = ThemeBorderWidthOptions | ThemeBorderWidthTopOptions | ThemeBorderWidthBottomOptions | ThemeBorderWidthLeftOptions | ThemeBorderWidthRightOptions;
export declare type ThemeBorderWidth = ThemeBorderWidthBase | ThemeBorderWidthBase[];
export declare type ThemeWidthsBase = ThemeWidthOptions | ThemeMaxWidthOptions | ThemeMinWidthOptions;
export declare type ThemeWidth = ThemeWidthOptions | ThemeWidthOptions[];
export declare type ThemeWidthWithMinMax = ThemeWidthsBase | ThemeWidthsBase[];
export declare type ThemeHeightsBase = ThemeHeightOptions | ThemeMaxHeightOptions | ThemeMinHeightOptions;
export declare type ThemeHeight = ThemeHeightOptions | ThemeHeightOptions[];
export declare type ThemeHeightWithMinMax = ThemeHeightsBase | ThemeHeightsBase[];
export declare type FlexParentBase = JustifyContentOptions | AlignItemsOptions | FlexWrapOptions | FlexDirectionOptions | ThemeFlexOptions;
export declare type FlexParent = FlexParentBase | FlexParentBase[];
export declare type FlexChildBase = ThemeFlexOptions | ThemeFlexGrowOptions | ThemeFlexShrinkOptions;
export declare type FlexChild = FlexChildBase | FlexChildBase[];
export declare type FlexOptionsBase = FlexParent | FlexChild;
export declare type FlexOptions = FlexOptionsBase | FlexOptionsBase[];
declare type OmitProps = "style" | "children";
export interface DataTestId {
    dataTestId?: string;
}
export interface RailwindBase<RwStyle, Element> extends DataTestId {
    forwardRef?: RefCallback<HTMLElement>;
    id?: string;
    style?: CSSProperties;
    className?: string;
    rwStyle?: RwStyle;
    onClick?(event: React.MouseEvent<Element, MouseEvent>): void;
}
export interface ColorProps {
    textColor?: ThemeTextColor;
    borderColor?: ThemeBorderColor;
    bgColor?: ThemeBackgroundColor;
}
export interface FontProps {
    font?: ThemeFont;
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
    transition?: TransitionProps;
}
export interface TransitionProps {
    property?: TransitionPropertyOptions;
    timing?: TransitionTimingFunctionOptions;
    duration?: TransitionDurationOptions;
}
interface AllHTMLElementProps extends ColorProps, FontProps, LayoutProps, AppearanceProps {
}
export declare type HTMLElements = 'div' | 'span' | 'ul' | 'ol' | 'li' | 'form';
export interface DivProps extends Omit<Partial<HTMLDivElement>, OmitProps>, RailwindBase<AllHTMLElementProps, HTMLDivElement> {
    as?: HTMLElements;
    container?: boolean;
    children?: ReactNode;
}
export interface TextProps extends Omit<Partial<HTMLParagraphElement>, OmitProps>, RailwindBase<AllHTMLElementProps, HTMLParagraphElement> {
    children: ReactNode;
}
export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, RailwindBase<AllHTMLElementProps, HTMLAnchorElement> {
    preventDefault?: boolean;
    children: ReactNode;
}
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, RailwindBase<ColorProps & LayoutProps & AppearanceProps, HTMLImageElement> {
}
export declare type ButtonSizes = 'sm' | 'md' | 'lg' | 'xl';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, RailwindBase<AllHTMLElementProps, HTMLButtonElement> {
    size?: ButtonSizes;
    href?: string;
    target?: string;
    children?: ReactNode;
}
export interface DropDownAlignment {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
}
export interface DropdownToggleProps extends DataTestId {
    useDefaultStyles?: boolean;
    /** Function that returns ReactNode */
    toggle: ((isActive: boolean) => ReactNode) | ReactNode;
    dropdownContent: ReactNode;
    dropdownAlignment?: DropDownAlignment;
    /** Render the dropdown as fixed position and not inline with the toggle element
     * Useful for when the dropdown may be cut off when rendered inline - Ex: trade table cell edit dropdown
    */
    dropdownPosition?: 'fixed' | 'absolute';
}
export {};

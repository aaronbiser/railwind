import { ReactNode, CSSProperties, RefObject, ChangeEvent } from 'react';
import { ThemeBackgroundColor, ThemePaddingSpacing, ThemeMarginSpacing, ThemeWidthOptions, ThemeMaxWidthOptions, ThemeMinWidthOptions, ThemeHeightOptions, ThemeMaxHeightOptions, ThemeMinHeightOptions, ThemeLetterSpacing, ThemeBoxShadow, ThemeBorderRadiusTopOptions, ThemeBorderRadiusBottomOptions, ThemeBorderRadiusRightOptions, ThemeBorderRadiusLeftOptions, ThemeBorderRadiusOptions, ThemeCursor, ThemeTextColor, ThemeFont, ThemeOpacity, ThemeFontSize, ThemeFillColor, ThemeBorderColor, ThemeLineHeight, ThemePositionTopOptions, ThemePositionBottomOptions, ThemePositionRightOptions, ThemePositionLeftOptions, Float, Display, TextAlign, zIndex, TextDecoration, PointerEvents, BorderStyle, Outline, PositionOptions, ThemeFlexOptions, FlexDirectionOptions, FlexWrapOptions, JustifyContentOptions, ThemeFlexGrowOptions, ThemeFlexShrinkOptions, ThemePlaceholderColor, AlignItemsOptions, Overflow, TransitionPropertyOptions, TransitionTimingFunctionOptions, TransitionDurationOptions, ThemeBorderWidthOptions, ThemeBorderWidthTopOptions, ThemeBorderWidthBottomOptions, ThemeBorderWidthLeftOptions, ThemeBorderWidthRightOptions, WhiteSpace } from './tailwind.types';
export interface HTMLElementProps {
    id?: string;
    cursor?: ThemeCursor;
    dataTestId?: string;
    pointerEvents?: PointerEvents;
    className?: string;
    display?: Display;
    flex?: FlexOptions;
    position?: Position;
    zIndex?: zIndex;
    width?: ThemeWidthWithMinMax;
    height?: ThemeHeightWithMinMax;
    margin?: ThemeMarginSpacing;
    padding?: ThemePaddingSpacing;
    float?: Float;
    font?: ThemeFont;
    fontSize?: ThemeFontSize;
    leading?: ThemeLineHeight;
    textAlign?: TextAlign;
    textDecoration?: TextDecoration;
    tracking?: ThemeLetterSpacing;
    textColor?: ThemeTextColor;
    whiteSpace?: WhiteSpace;
    opacity?: ThemeOpacity;
    shadow?: ThemeBoxShadow;
    borderRadius?: ThemeBorderRadius;
    overflow?: Overflow;
    style?: CSSProperties;
    borderStyle?: BorderStyle;
    borderWidth?: ThemeBorderWidth;
    borderColor?: ThemeBorderColor;
    outline?: Outline;
    bgColor?: ThemeBackgroundColor;
    transition?: TransitionProps | TransitionProps[];
}
export interface TransitionProps {
    property?: TransitionPropertyOptions;
    timing?: TransitionTimingFunctionOptions;
    duration?: TransitionDurationOptions;
}
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
export interface TextProps {
    forwardRef?: RefObject<HTMLParagraphElement>;
    children: ReactNode;
    onClick?(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>): void;
}
export declare type HeaderType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps {
    forwardRef?: RefObject<HTMLHeadingElement>;
    children: ReactNode;
    type?: HeaderType;
    onClick?: Function;
}
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
export declare type AnchorTarget = '_self' | '_blank' | '_parent' | '_top';
export declare type ButtonSizes = 'sm' | 'md' | 'lg';
export declare type ButtonType = 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'white';
export declare type ButtonWidth = 'w-auto' | 'w-full';
export interface ButtonIcon {
    iconWidth?: ThemeWidth;
    iconColor?: ThemeFillColor;
    iconRight?: boolean;
}
export interface ButtonProps {
    forwardRef?: RefObject<HTMLButtonElement>;
    size?: ButtonSizes;
    disabled?: boolean;
    children: ReactNode;
    onClick?: Function;
}
export interface ImageProps {
    forwardRef?: RefObject<HTMLImageElement>;
    src: string;
    alt?: string;
}
export interface HorizontalRuleProps {
}
export interface SvgProps {
    forwardRef?: RefObject<HTMLOrSVGElement>;
    title: string;
    svg: ReactNode;
    viewBox?: string;
}
export interface IconProps {
    fill?: ThemeFillColor;
    onClick?: Function;
}
declare type InputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
export interface InputProps {
    forwardRef?: RefObject<HTMLInputElement>;
    key?: string | number;
    disabled?: boolean;
    type: InputType;
    value?: string;
    placeholder?: string;
    placeholderColor?: ThemePlaceholderColor;
    name?: string;
    checked?: boolean;
    readOnly?: boolean;
    onFocus?(event: ChangeEvent<HTMLInputElement>): void;
    onBlur?(event: ChangeEvent<HTMLInputElement>): void;
    onChange?(event: ChangeEvent<HTMLInputElement>): void;
    ariaLabel?: string;
    hasError?: boolean;
}
export {};

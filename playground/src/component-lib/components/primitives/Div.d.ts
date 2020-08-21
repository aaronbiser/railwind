import React, { RefObject, ReactNode } from 'react';
import { HTMLElementProps } from '../../types';
export declare type DivElements = 'div' | 'span' | 'ul' | 'ol' | 'li' | 'form';
export interface DivProps extends HTMLElementProps {
    forwardRef?: RefObject<HTMLDivElement>;
    as?: DivElements;
    container?: boolean;
    onClick?: Function;
    children?: ReactNode;
}
declare const Div: ({ forwardRef, as, container, onClick, id, children, cursor, dataTestId, pointerEvents, display, flex, position, zIndex, width, height, margin, padding, float, opacity, shadow, overflow, borderRadius, style, className, bgColor, borderStyle, borderWidth, borderColor, outline, font, fontSize, leading, textAlign, textDecoration, tracking, textColor, transition }: DivProps) => React.ReactElement<{
    id: string | undefined;
    ref: React.RefObject<HTMLDivElement> | undefined;
    'data-testid': string | undefined;
    className: string;
    style: React.CSSProperties | undefined;
    onClick: Function | undefined;
}, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default Div;

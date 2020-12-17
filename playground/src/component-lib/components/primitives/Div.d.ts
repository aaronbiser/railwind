import React from 'react';
import { DivProps } from '../..';
declare const Div: ({ as, container, forwardRef, id, dataTestId, style, onClick, children, rwStyle }: DivProps) => React.DetailedReactHTMLElement<{
    id: string | undefined;
    ref: React.RefObject<HTMLDivElement> | undefined;
    'data-testid': string | undefined;
    className: string;
    style: React.CSSProperties | undefined;
    onClick: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
}, HTMLDivElement>;
export default Div;

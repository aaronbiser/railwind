import React, { RefObject, ReactNode } from 'react'
import classnames from 'classnames'
import {
  getClassNames,
  getTransitionClassNames
} from '../../lib/helpers'
import { HTMLElementProps } from '../../types';

export type DivElements = 'div' | 'span' | 'ul' | 'ol' | 'li' | 'form';

export interface DivProps extends HTMLElementProps {
  forwardRef?: RefObject<HTMLDivElement>;
  as?: DivElements;
  /* If true applies global responsive width and spacing styles */
  container?: boolean;
  onClick?: Function;
  children?: ReactNode;
}

const Div = ({
  // Element props
  forwardRef,
  as = 'div',
  container = false,
  onClick,
  // HTMLPrimitiveProps
  id,
  children,
  cursor,
  dataTestId,
  pointerEvents,
  // LayoutProps
  display,
  flex,
  position,
  zIndex,
  width,
  height,
  margin,
  padding,
  float,
  // AppearanceProps
  opacity,
  shadow,
  overflow,
  borderRadius,
  style,
  className = '',
  // BackgroundProps
  bgColor,
  // BorderProps
  borderStyle,
  borderWidth,
  borderColor,
  outline,
  // FontProps
  font,
  fontSize,
  leading,
  textAlign,
  textDecoration,
  tracking,
  textColor,
  // TransitionProps
  transition = { property: 'transition-none' }
}: DivProps) => {

  const classNames = classnames({
    ...container ? { 'container': true } : {},
    ...getClassNames(cursor),
    ...getClassNames(pointerEvents),
    ...getClassNames(as === 'span' ? 'inline-block' : display),
    ...getClassNames(flex),
    ...getClassNames(position),
    ...getClassNames(zIndex),
    ...getClassNames(width),
    ...getClassNames(height),
    ...getClassNames(margin),
    ...getClassNames(padding),
    ...getClassNames(float),
    ...getClassNames(opacity),
    ...getClassNames(shadow),
    ...getClassNames(overflow),
    ...getClassNames(borderRadius),
    ...getClassNames(bgColor),
    ...getClassNames(borderStyle),
    ...getClassNames(borderWidth),
    ...getClassNames(borderColor),
    ...getClassNames(outline),
    ...getClassNames(font),
    ...getClassNames(fontSize),
    ...getClassNames(leading),
    ...getClassNames(textAlign),
    ...getClassNames(textDecoration),
    ...getClassNames(tracking),
    ...getClassNames(textColor),
    ...getTransitionClassNames(transition),
    [className]: true
  })

  return React.createElement(
    as,
    {
      id: id,
      ref: forwardRef,
      'data-testid': dataTestId,
      className: classNames,
      style,
      onClick
    },
    children
  )
}

export default Div

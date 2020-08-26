import React from 'react';
import { ButtonProps } from '../../types';
import { getAllClassNames } from '../../lib/helpers';

export const Button = ({
  forwardRef,
  id,
  dataTestId,
  style,
  onClick,
  href,
  target = '_self',
  children,
  rwStyle
}: ButtonProps) => {

  rwStyle = {
    ...rwStyle,
    textAlign: 'text-center',
    display: 'block'
  }

  const derivedProps = {
    ref: forwardRef,
    id,
    'data-testid': dataTestId,
    className: getAllClassNames(rwStyle),
    style,
    children,
    // button specific props
    ...!href ? {
      type: 'submit',
      onClick: (e: React.MouseEvent<HTMLButtonElement>) => onClick && onClick(e)
    } : null,
    // anchor specific props
    ...href ? {
      href,
      // Using target="_blank" without rel="noopener noreferrer" is a security risk: 
      // see https://mathiasbynens.github.io/rel-noopenereslint(react/jsx-no-target-blank)
      target,
      rel: 'noopener noreferrer'
    } : null
  }

  return React.createElement(
    href ? 'a' : 'button',
    derivedProps,
  )
}

import React from 'react';
import { ButtonProps } from '../../types';
import { getAllClassNames } from '../../lib/helpers';

export const Button = ({ rwStyle, ...props }: ButtonProps) => {

  rwStyle = {
    ...rwStyle,
    textAlign: 'text-center',
    display: 'block'
  }

  const derivedProps = {
    ref: props.forwardRef,
    id: props.id,
    'data-testid': props.dataTestId,
    className: getAllClassNames(rwStyle),
    style: props.style,
    children: props.children,
    // button specific props
    ...!props.href ? {
      type: 'submit',
      onClick: (e: React.MouseEvent<HTMLButtonElement>) => props.onClick && props.onClick(e)
    } : null,
    // anchor specific props
    ...props.href ? {
      href: props.href,
      // Using target="_blank" without rel="noopener noreferrer" is a security risk: 
      // see https://mathiasbynens.github.io/rel-noopenereslint(react/jsx-no-target-blank)
      target: '_self',
      rel: 'noopener noreferrer'
    } : null
  }

  return React.createElement(
    props.href ? 'a' : 'button',
    derivedProps,
  )
}

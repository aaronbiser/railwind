import React from 'react';
import Div from '../../primitives/Div';
import { CardProps } from '../../types';

export const Card = ({ rwStyle, ...props }: CardProps) => {
  return (
    <Div
      {...props}
      rwStyle={rwStyle || {
        bgColor: 'bg-white',
        borderRadius: 'rounded-md',
        shadow: 'shadow-xl',
        overflow: 'overflow-hidden',
      }}
    >
      {props.children}
    </Div>
  )
}

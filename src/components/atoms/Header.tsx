import React from 'react';
import Div from '../../primitives/Div';
import { HeaderProps } from '../../types';

export const Header = ({ as = 'h1', rwStyle, ...props }: HeaderProps) => {
  return (
    <Div
      {...props}
      as={as}
      rwStyle={rwStyle}
    >
      {props.children}
    </Div>
  )
}

import React from 'react';
import Div from '../../primitives/Div';
import { DivProps } from '../../types';

export const Box = ({ children, ...props }: DivProps) => {
  return (
    <Div {...props}>
      {children}
    </Div>
  )
}

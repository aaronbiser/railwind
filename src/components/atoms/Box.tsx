import React from 'react';
import Div from '../../primitives/Div';
import { DivProps } from '../../types';

export const Box = ({ rwStyle, ...props }: DivProps) => {
  return (
    <Div {...props}>
      {props.children}
    </Div>
  )
}

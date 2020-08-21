import React from 'react';
import Div, { DivProps } from '../primitives/Div';

export const Box: React.FC<DivProps> = (props) => {
  return (
    <Div
      {...props}
      as={props.as || 'div'}
      display={props.display || 'block'}
    >
      {props.children}
    </Div>
  )
}

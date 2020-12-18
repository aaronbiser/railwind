import React from 'react';
import Div from '../../primitives/Div';
import { DivProps } from '../../types';

export const Box = (props: DivProps) => {
  return (
    <Div
      {...props}
      as={props.as || 'div'}
      rwStyle={{
        ...props.rwStyle,
        display: props?.rwStyle?.display || 'block'
      }}
    >
      {props.children}
    </Div>
  )
}

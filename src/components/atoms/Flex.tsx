import React from 'react';
import Div from '../../primitives/Div';
import { FlexProps } from '../../types';

export const Flex = (props: FlexProps) => {
  return (
    <Div
      {...props}
      rwStyle={{
        display: 'flex',
        ...props.rwStyle
      }}
    >
      {props.children}
    </Div>
  )
}

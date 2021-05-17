import React from 'react';
import { Box } from '../atoms/Box'
import { DivProps } from '../../types';

export const Flex = (props: DivProps) => {
  return (
    <Box {...props} rwStyle={{ ...props.rwStyle, display: 'flex' }} />
  )
}

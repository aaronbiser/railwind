import React from 'react';
import { Box } from '../atoms/Box'
import { DivProps } from '../../types';

export const Flex = ({ rwStyle, ...props }: DivProps) => {
  return (
    <Box {...props} rwStyle={{ ...rwStyle, display: 'flex' }} />
  )
}

import React from 'react';
import { Box, DivProps } from '../component-lib'

interface Props extends Partial<DivProps> {
  silly: boolean
}

const SillyBox: React.FC<Props> = ({ silly, ...props }) => {
  return (
    <Box
      {...props}
      as={props.as || 'div'}
      display={props.display || 'block'}
    >
      {props.children} {silly ? ';)' : ':('}
    </Box>
  )
}

export default SillyBox
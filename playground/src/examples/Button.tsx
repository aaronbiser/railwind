import React from 'react';
import { Box, Button } from '../component-lib'

const ButtonExample = () => {
  return (
    <Box rwStyle={{ width: 'w-48' }}>
    <Button
      onClick={() => console.log('clicked')}
      >
      Click the button
    </Button>
      </Box>
  );
};

export default ButtonExample

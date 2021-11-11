import React from 'react';
import { Box } from '../component-lib'

const Card = () => {
  return (
    <Box rwStyle={{ width: 'w-64' }}>
      <Box as="ul" rwStyle={{ padding: 'pl-6' }}>
        <Box as ="li" rwStyle={{ listStyleType: 'list-disc' }}>thing 1</Box>
        <Box as ="li" rwStyle={{ listStyleType: 'list-disc' }}>thing 2</Box>
      </Box>
    </Box>
  );
};

export default Card;
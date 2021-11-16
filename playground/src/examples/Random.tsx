import React from 'react';
import { Flex, Box, Header, Text} from '../component-lib'

const Card = () => {
  return (
    <Box rwStyle={{ width: 'w-64', padding: 'pl-6' }}>
      <Box as="ul" rwStyle={{ margin: 'mb-6' }}>
        <Header as="h4">List Items</Header>
        <Box as ="li" rwStyle={{ listStyleType: 'list-disc' }}>thing 1</Box>
        <Box as ="li" rwStyle={{ listStyleType: 'list-disc' }}>thing 2</Box>
      </Box>

      <Box as="ul" rwStyle={{ margin: 'mb-6' }}>
        <Header as="h4">Group Class</Header>
        <Text>Hover inside box to see the text color change</Text>
        <Box 
        isGroupParent 
        rwStyle={{ 
            borderColor: 'border-gray-300', 
            borderStyle: 'border-solid', 
            borderWidth: 'border', 
            margin: 'mt-4',
            padding: 'p-4' 
          }}
        >
          <Box rwStyle={{ textColor: ['text-color1-400', 'group-hover:text-color1-700'] }}>Box</Box>
          <Box rwStyle={{ textColor: ['text-color2-400', 'group-hover:text-color2-700'] }}>Box</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
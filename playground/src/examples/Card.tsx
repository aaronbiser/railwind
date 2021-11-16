import React from 'react';
import { Image, Box, Text, Button, Anchor } from '../component-lib'
import { DivProps } from '../component-lib/types';

const learnMoreBtn = (
  <Anchor
    href="#"
    rwStyle={{
      textColor: ['text-color4-500', 'hover:text-color4-600'],
      textDecoration: 'underline'
    }}
  >Learn More</Anchor>
)

const Card = () => {
  const listItemStyles: Pick<DivProps, 'rwStyle'> = { rwStyle: { listStyleType: 'list-disc'} }

  return (
    <Box rwStyle={{ width: 'w-64' }}>
      <Box>
        <Image
          alt='Itza cat'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1024px-Kittyply_edit1.jpg"
          onClick={() => console.log('clicked image')}
          rwStyle={{
            cursor: 'cursor-pointer',
            opacity: ['opacity-100', 'hover:opacity-75'],
            transition: {
              duration: 'duration-300',
              property: 'transition-opacity',
              timing: 'ease-in-out'
            }
          }}
        />
        <Box rwStyle={{ padding: 'p-6' }}>
          <Text
            rwStyle={{
              fontSize: 'text-2xl',
              fontWeight: 'font-bold',
              margin: 'mb-2',
              textColor: 'text-color1-500'
            }}
          >
            Box headline
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac cursus tellus. Integer diam nisi, aliquam a est eget, lobortis porta ex. {learnMoreBtn}
          
          </Text>
          <Box as="ul" rwStyle={{ padding: 'pl-6' }}>
            <Box as ="li" rwStyle={{ ...listItemStyles.rwStyle }}>List item 1</Box>
            <Box as ="li" rwStyle={{ ...listItemStyles.rwStyle }}>List item 2</Box>
          </Box>

          <Box rwStyle={{ margin: 'mt-8' }}>
            <Button
              onClick={() => console.log('clicked')}
            >
              Click the button
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
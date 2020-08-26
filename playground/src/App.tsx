import React from 'react';
import './index.output.css';
import { Image, Box, Text, Button, Anchor } from './component-lib'

function App() {
  return (
    <Box className="App" padding='p-16'>
      <Box
        bgColor='bg-white'
        borderRadius='rounded-lg'
        shadow='shadow-xl'
        width='w-64'
        overflow='overflow-hidden'
      >
        <Image
          alt='Itza cat'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1024px-Kittyply_edit1.jpg"
          opacity={['opacity-100', 'hover:opacity-75']}
          transition={{
            duration: 'duration-300',
            property: 'transition-opacity',
            timing: 'ease-in-out'
          }}
        />
        <Box padding='p-3'>
          <Text
            fontSize='text-2xl'
            fontWeight='font-bold'
            margin='mb-2'
            textColor={['text-blue-500', 'lg:text-blue-200']}
          >
            Ayoooooo a box
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac cursus tellus. Integer diam nisi, aliquam a est eget, lobortis porta ex. <Anchor href="#" textColor={['text-blue-400', 'hover:text-blue-600']} textDecoration='underline'>Learn More</Anchor>
          </Text>
          <Button
            bgColor={['bg-blue-800', 'hover:bg-blue-600']}
            textColor='text-white'
            borderRadius='rounded'
            padding={['px-4', 'py-2']}
            margin={['mt-4']}
            width='w-full'
            onClick={() => console.log('clicked')}
          >
            Click the button
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;

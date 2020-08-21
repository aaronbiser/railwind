import React from 'react';
import './index.output.css';
import { Image, Box } from './component-lib'
import SillyBox from './playground-components/SillyBox'

function App() {
  return (
    <div className="App">
      <Box borderWidth='border' borderColor='border-blue-500' borderStyle='border-solid' margin='mb-8'>
        Ayoooooo a box
      </Box>
      <SillyBox silly width='w-3/12' margin='mb-12'>This is a silly box</SillyBox>
      <Image className='max-w-xl' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1024px-Kittyply_edit1.jpg" />
    </div>
  );
}

export default App;

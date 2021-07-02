import React, { useState } from 'react';
import { Box, Input, Label } from '../component-lib'

const InputExample = () => {
  const [name, setName] = useState('John Appleseed')
  const [checked, setChecked] = useState(false)

  return (
    <Box>
      <Label>Name</Label>
      <Box rwStyle={{ margin: ['mt-2', 'mb-4'] }}>
        <Input 
          placeholder='Name'
          value={name} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e?.target?.value)} 
        />
      </Box>
      
      <Label>Email</Label>
      <Box rwStyle={{ margin: ['mt-2', 'mb-4'] }}>
        <Input placeholder='Email address' />
      </Box>
    
      <Label>Password</Label>
      <Box rwStyle={{ margin: ['mt-2', 'mb-4'] }}>
        <Input type='password' placeholder='Password' />
      </Box>
    
      <Label>Checkbox</Label>
      <Box rwStyle={{ margin: ['mt-2', 'mb-4'] }}>
        <Input 
          type='checkbox' 
          checked={checked} 
          onChange={() => setChecked(!checked)}
        />
      </Box>
    </Box>
  )
}

export default InputExample

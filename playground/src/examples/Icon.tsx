import React from 'react';
import { Box, Icon, Text } from '../component-lib'

const IconExample = () => {
  return (
    <Box>
      <Icon 
        viewBox="0 0 24 14.3" 
        rwStyle={{ width: 'w-3' }}
        path="M2.441-.039l9.714 9.714L21.852-.02l2.295 2.294-11.995 11.995-2.294-2.294.003-.005L.147 2.256 2.44-.04z"
      />
      <Box rwStyle={{ margin: 'mt-8' }} />
      <Icon 
        viewBox="0 0 24 24" 
        rwStyle={{ width: 'w-8' }}
        path="M1 0C.5 0 0 .5 0 1v22c0 .6.5 1 1 1h22c.6 0 1-.5 1-1V12.1c0-.6-.5-1-1-1-.6 0-1 .5-1 1V22H2V2h9.9c.6 0 1-.5 1-1s-.5-1-1-1H1zm15.944 0a1 1 0 00-1.008.988c0 .494.504.988 1.008.988h3.528l-7.761 7.61a.942.942 0 000 1.383.988.988 0 001.41 0l7.863-7.61v3.558c0 .593.504.988 1.008.988s.907-.395 1.008-.988V.988C24 .395 23.597 0 22.992 0h-6.048z"
      />
      <Box rwStyle={{ margin: 'mt-8' }} />
      <Text rwStyle={{ margin: 'mb-2' }}>This icon has an href</Text>
      <Icon 
        href="#" 
        viewBox="0 0 24 14.3"
        rwStyle={{ width: 'w-8' }}
        path="M2.441-.039l9.714 9.714L21.852-.02l2.295 2.294-11.995 11.995-2.294-2.294.003-.005L.147 2.256 2.44-.04z"
      />
      <Box rwStyle={{ margin: 'mt-8' }} />
      <Icon 
        viewBox="0 0 24 14.3" 
        rwStyle={{ width: 'w-12', fill: 'fill-color3-600' }}
        path="M2.441-.039l9.714 9.714L21.852-.02l2.295 2.294-11.995 11.995-2.294-2.294.003-.005L.147 2.256 2.44-.04z"
      />
    </Box>
  )
}

export default IconExample

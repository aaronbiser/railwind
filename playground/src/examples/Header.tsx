import React, { ReactNode } from 'react';
import { Box, Header } from '../component-lib'
import { HTMLHeaderElements } from '../component-lib/types';

const HeaderComp = ({ as, children }: { as: HTMLHeaderElements, children: ReactNode }) => (
  <Header as={as} rwStyle={{ margin: 'my-4' }}>{children}</Header>
)

const headers = [
  { as: 'h1', children: 'h1 Header' },
  { as: 'h2', children: 'h2 Header' },
  { as: 'h3', children: 'h3 Header' },
  { as: 'h4', children: 'h4 Header' },
  { as: 'h5', children: 'h5 Header' },
  { as: 'h6', children: 'h6 Header' }
]

const HeaderExample = () => {
  return (
    <Box>
      {headers.map(h => <HeaderComp as={h.as as HTMLHeaderElements} key={h.as}>{h.children}</HeaderComp>)}
    </Box>
  )
}

export default HeaderExample

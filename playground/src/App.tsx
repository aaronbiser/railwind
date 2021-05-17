import React, { useState } from 'react';
import { Flex, Box } from './component-lib'
import Card from './examples/Card'
import DropdownToggle from './examples/DropdownToggle'
import Button from './examples/Button'

const EXAMPLES = {
  CARD: 'Card',
  DROPDOWN: 'Dropdown',
  BUTTON: 'Button',
}

const renderPanel = (selectedTab: string) => {
  switch (selectedTab) {
    case EXAMPLES.CARD:
      return <Card />
    case EXAMPLES.DROPDOWN:
      return <DropdownToggle />
    case EXAMPLES.BUTTON:
      return <Button />
  }
}

function App() {
  const [selectedTab, setSelectedTab] = useState(EXAMPLES.CARD)

  const tabs = Object.entries(EXAMPLES)

  
  return (
    <Box className="App" rwStyle={{ height: 'min-h-screen', bgColor: 'bg-gray-100' }}>
      <Flex as='ul' rwStyle={{ margin: 'mb-8', bgColor: 'bg-white', padding: ['px-16', 'pt-12'] }}>
        {tabs.map(tab => {
          const value = tab[1]
          const active = selectedTab === tab[1]

          return (
            <Box
              as='li' 
              key={value} 
              onClick={() => setSelectedTab(value)}
              rwStyle={{
                cursor: 'cursor-pointer',
                padding: ['px-4', 'py-2'],
                margin: 'mx-3',
                borderColor: active ? 'border-color4-500' : 'border-transparent',
                borderStyle: 'border-solid',
                borderWidth: 'border-b-2'
              }}
            >{value}</Box>
          )
        })}
      </Flex>

      <Box rwStyle={{ padding: ['px-16', 'py-8'] }}>
        {renderPanel(selectedTab)}
      </Box>
      
    </Box>
  );
}

export default App;

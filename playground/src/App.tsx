import React, { useState } from 'react';
import { Flex, Box } from './component-lib'
import DropdownToggle from './examples/DropdownToggle'
import Button from './examples/Button'
import Modal from './examples/Modal'
import Table from './examples/Table'
import Header from './examples/Header'
import Icon from './examples/Icon'
import Input from './examples/Input'
import TabbedPanels from './examples/TabbedPanels'
import ToggleSwitch from './examples/ToggleSwitch'

const EXAMPLES = {
  MODAL: 'Modal',
  DROPDOWN: 'Dropdown',
  BUTTON: 'Button',
  TABLE: 'Table',
  HEADER: 'Header',
  ICON: 'Icon',
  INPUT: 'Input',
  TABBED_PANELS: 'Tabbed Panels',
  TOGGLE_SWITCH: 'Toggle Switch'
}

const renderPanel = (selectedTab: string) => {
  switch (selectedTab) {
    case EXAMPLES.DROPDOWN:
      return <DropdownToggle />
    case EXAMPLES.BUTTON:
      return <Button />
    case EXAMPLES.MODAL:
      return <Modal />
    case EXAMPLES.TABLE:
      return <Table />
    case EXAMPLES.HEADER:
      return <Header />
    case EXAMPLES.ICON:
      return <Icon />
    case EXAMPLES.INPUT:
      return <Input />
    case EXAMPLES.TABBED_PANELS:
      return <TabbedPanels />
    case EXAMPLES.TOGGLE_SWITCH:
      return <ToggleSwitch />
  }
}

function App() {
  const [selectedTab, setSelectedTab] = useState(EXAMPLES.TOGGLE_SWITCH)

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

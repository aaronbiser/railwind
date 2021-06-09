import React from 'react';
import { useState } from 'react';
import { Text, TabbedPanels, Tabs, Tab, TabPanel, Image, Header, Box } from '../component-lib'

const Panel = (props: any) => {
  return (
    <TabPanel 
      rwStyle={{ 
        bgColor: 'bg-gray-200',
        padding: 'p-3',
        margin: 'my-2' 
      }}
    >
      {props.children}
    </TabPanel>
  )
}

const TabbedPanelsExample = () => {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <TabbedPanels index={tabIndex} setIndex={setTabIndex}>
      <Header as='h4'>
        Tab elements do not have to be placed in any specific order
      </Header>
      <Text rwStyle={{ margin: 'my-4' }}>
        1. Pass custom railwind styles via rwStyles prop
      </Text>
      <Tabs>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tabs>
      <Text rwStyle={{ margin: 'my-4' }}>
        2. Place other elements between the tab components
      </Text>
      <Panel>
        <Box>Box</Box>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci obcaecati quasi alias quos sit quaerat libero mollitia asperiores quia? Aperiam tempora assumenda dolore laudantium, explicabo porro ipsa eveniet reiciendis repudiandae?</Text>
      </Panel>
      <Panel>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/800px-Kittyply_edit1.jpg' width='w-1/2' />
      </Panel>
      <Panel>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci obcaecati quasi alias quos sit quaerat libero mollitia asperiores quia? Aperiam tempora assumenda dolore laudantium, explicabo porro ipsa eveniet reiciendis repudiandae?</Text>
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci obcaecati quasi alias quos sit quaerat libero mollitia asperiores quia? Aperiam tempora assumenda dolore laudantium, explicabo porro ipsa eveniet reiciendis repudiandae?</Text>
      </Panel>
      <Text rwStyle={{ margin: 'my-4' }}>
        3. Add content anywhere else as needed
      </Text>
    </TabbedPanels>
  )
}

export default TabbedPanelsExample

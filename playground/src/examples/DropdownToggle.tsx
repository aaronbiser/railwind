import React from 'react';
import { DropdownToggle as BaseDropdownToggle, Box, Flex } from '../component-lib'

const DropdownToggle = () => {
  const examples = [
    <BaseDropdownToggle
      toggle={(isActive: boolean) => <Box>{`Click${isActive ? 'ed' : ''} it`}</Box>}
      dropdownContent={<Box rwStyle={{ width: 'w-64' }}>You clicked it! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum nemo quasi rerum voluptate, assumenda iusto delectus sequi perferendis quia tenetur! Optio, harum placeat expedita eum veniam ex eaque aperiam.</Box>}
      dropdownAlignment={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
    />,
    <BaseDropdownToggle
      toggle={() => 'Top left example'}
      dropdownContent={<Box rwStyle={{ width: 'w-64' }}>You clicked it!</Box>}
      dropdownAlignment={{
        vertical: 'top',
        horizontal: 'left'
      }}
    />,
    <BaseDropdownToggle
      toggle={() => 'Top right example'}
      dropdownContent={<Box rwStyle={{ width: 'w-64' }}>You clicked it!</Box>}
      dropdownAlignment={{
        vertical: 'top',
        horizontal: 'right'
      }}
    />,
    <BaseDropdownToggle
      toggle={() => 'Bottom right example'}
      dropdownContent={<Box rwStyle={{ width: 'w-64' }}>You clicked it!</Box>}
      dropdownAlignment={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
    />
  ]

  return (
    <Flex rwStyle={{ margin: '-mx-4' }}>
      {examples.map((e, index) => {
        return (
          <Box key={index} rwStyle={{ padding: 'px-4' }}>
            {e}
          </Box>
        )
      })}
    </Flex>
  );
};

export default DropdownToggle;
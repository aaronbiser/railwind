import React, { useState } from 'react';
import { Box, Button, Modal, Text } from '../component-lib'

const ModalExample = () => {
  const [isToggled, setIsToggled] = useState(false)

  const modalContent = (
    <Box>
      <Text rwStyle={{ margin: 'mb-4' }}>This is modal content</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet placerat urna, consectetur venenatis lacus. Nullam auctor venenatis erat vel iaculis. Nulla luctus laoreet bibendum. Donec tristique suscipit hendrerit. Nunc vel urna ex. In eleifend felis elit, ac bibendum dui auctor non. Nunc porta at justo non pellentesque. Nulla interdum, ante a convallis laoreet, nunc dolor convallis sapien, id pharetra purus lorem ac ex. Donec at porttitor ante, eu maximus dolor. Aenean feugiat vestibulum vehicula. Donec in consectetur nulla.</Text>
    </Box>
  )

  return (
    <Box rwStyle={{ width: 'w-64' }}>
      <Button onClick={() => setIsToggled(true)}>Toggle Modal</Button>
      {isToggled && (
        <Modal
          toggle={setIsToggled}
          modalContent={modalContent}
        />
      )}
    </Box>
  );
};

export default ModalExample

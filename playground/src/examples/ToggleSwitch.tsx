import React, { useState } from 'react';
import { ToggleSwitch, Text } from '../component-lib'

const TabbedPanelsExample = () => {
  const [toggled1, setToggled1] = useState(false)
  const [toggled2, setToggled2] = useState(true)

  return (
    <>
      <Text rwStyle={{ margin: 'mb-2' }}>Off by default</Text>
      <ToggleSwitch
        isToggled={toggled1}
        onClick={() => setToggled1(!toggled1)}
      />

      <Text rwStyle={{ margin: ['mt-4', 'mb-2'] }}>On by default</Text>
      <ToggleSwitch
        isToggled={toggled2}
        onClick={() => setToggled2(!toggled2)}
      />
    </>
  )
}

export default TabbedPanelsExample

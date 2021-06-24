import React, { useState } from 'react';
import { ToggleSwitch } from '../component-lib'

const TabbedPanelsExample = () => {
  const [toggled, setToggled] = useState(false)
  const handleSetToggle = () => setToggled(!toggled)

  return (
    <ToggleSwitch
      isToggled={toggled}
      onClick={handleSetToggle}
    />
  )
}

export default TabbedPanelsExample

import React, { useState } from 'react';
import { ToggleSwitch } from '../component-lib'

const TabbedPanelsExample = () => {
  const [toggled, setToggled] = useState(false)
  const Label = ({ color, children }: any) => {
    return <div className={`font-semi-bold uppercase text-sm text-center ${color}`}>{children}</div>
  }

  const handleSetToggle = () => setToggled(!toggled)

  return (
    <ToggleSwitch
      isToggled={toggled}
      labelWidth={3}
      leftSide={(
        <Label color={!toggled ? 'text-white' : 'text-gray-800'}>On</Label>
      )}
      rightSide={(
        <Label color={toggled ? 'text-white' : 'text-gray-800'}>Off</Label>
      )}
      onClick={handleSetToggle}
      // height='h-8'
      // borderRadius='rounded-full'
      // toggleBgColor='bg-blue-400'
    />
  )
}

export default TabbedPanelsExample

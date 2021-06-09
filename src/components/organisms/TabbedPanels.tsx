import React, { useEffect } from 'react'
// @ts-ignore
import { Tabs as BTabs, useTabState, usePanelState } from '@bumaga/tabs'
// @ts-ignore
import { useSpring } from 'react-spring'
import { Box } from '../atoms/Box'
import { TabbedPanelsProps, TabsProps, TabProps, TabPanelProps } from '../../types'

/**
 * Tabbed panels are created by first importing `TabbedPanels`, `Tabs`, `Tab` and `TabPanel` individually. The elements can then be arranged in the structure  needed to fullfill the design requirements.
 */
export const TabbedPanels = ({ index, setIndex, rwStyle, children }: TabbedPanelsProps) => {
  useEffect(() => {
    index && setIndex && setIndex(index)
  }, [])

  return (
    <BTabs state={[index, setIndex]}>
      <Box rwStyle={rwStyle || {}}>
        {children}
      </Box>
    </BTabs>
  )
}

export const Tabs = ({ rwStyle, children }: TabsProps) => {
  return (
    <Box 
      rwStyle={rwStyle || {
        display: 'flex'
      }}
    >
      {children}
    </Box>
  )
}

export const Tab = ({ rwStyle, children }: TabProps) => {
  const { isActive, onClick } = useTabState()

  return (
    <Box
      rwStyle={rwStyle || {
        margin: ['mr-4', 'md:mr-10'],
        padding: ['px-1', 'py-3'],
        borderWidth: 'border-b-2',
        borderColor: isActive ? 'border-color1-500' : 'border-transparent',
        borderStyle: 'border-solid',
        textColor: isActive ? 'text-color1-500' : 'text-inherit',
        cursor: 'cursor-pointer',
        fontWeight: 'font-semibold'
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  )
}

export const TabPanel = ({ rwStyle, children }: TabPanelProps) => {
  const isActive = usePanelState()

  return isActive ? (
    <Box rwStyle={rwStyle || {}}>
      {children}
    </Box>
  ) : null
}

export default TabbedPanels

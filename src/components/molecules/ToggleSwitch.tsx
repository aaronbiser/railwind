import React, { useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import { Flex } from '../atoms/Flex';
import { Box } from '../atoms/Box';
import { AllHTMLElementProps, ToggleSwitchProps } from '../../types';
import { getAllClassNames } from '../../lib/helpers';

export const TOGGLE_SWITCH_ID = 'TOGGLE_SWITCH_ID'
export const TOGGLE_SWITCH_ANIMATED_TOGGLE_ID = 'TOGGLE_SWITCH_ANIMATED_TOGGLE_ID'

/**
 * `ToggleSwitch` controls the sizing and animates between two states when toggled. `isToggled` state is not maintined internally and is expected to be passed from a parent container.
 */
export const ToggleSwitch = ({
  isToggled,
  leftSideText,
  rightSideText,
  onClick,
  rwStyle,
  ...props
}: ToggleSwitchProps) => {
    const ref = useRef<HTMLDivElement>(null)

    const transform = `translateX(${isToggled ? '100%' : '0%'})`

    // animation toggle
    const [toggleAnimationStyles, setToggleAnimationStyles] = useSpring(() => ({
      config: { duration: 100 },
      transform
    }))

    setToggleAnimationStyles({ transform })

    const toggleParentStyles: AllHTMLElementProps = {
      width: 'w-20',
      height: 'h-6',
      bgColor: ['bg-gray-200', 'hover:bg-gray-300'],
      ...rwStyle?.toggleParent || {},
      // required styles
      position: 'relative',
      display: 'inline-block',
      cursor: 'cursor-pointer',
      overflow: 'overflow-hidden',
      select: 'select-none',
    }

    const toggleSwitchStyles: AllHTMLElementProps = {
      bgColor: 'bg-gray-600',
      ...rwStyle?.toggleSwitch || {},
      // required styles
      position: 'absolute',
      zIndex: 'z-20',
      height: 'h-full'
    }

    const toggleLabelStyles: AllHTMLElementProps = {
      fontSize: 'text-sm',
      textColor: 'text-gray-800',
      ...rwStyle?.toggleLabel || {},
      // required styles
      textAlign: 'text-center'
    }
    
    return (
      <Box
        {...props}
        forwardRef={ref}
        dataTestId={TOGGLE_SWITCH_ID}
        rwStyle={toggleParentStyles}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => onClick && onClick(e)}
      >
        <animated.div
          data-testid={TOGGLE_SWITCH_ANIMATED_TOGGLE_ID}
          className={getAllClassNames(toggleSwitchStyles)}
          style={{
            ...toggleAnimationStyles,
            width: '50%'
          }}
        />
        <Flex
          rwStyle={{
            position: 'relative',
            zIndex: 'z-10',
            flex: 'items-center',
            height: 'h-full',
            width: 'w-full'
          }}
        >
        <Box rwStyle={{ flex: 'flex-1' }}>
        <Box rwStyle={toggleLabelStyles}>
            {leftSideText || 'ON'}
          </Box>
        </Box>
        <Box rwStyle={{ flex: 'flex-1' }}>
          <Box rwStyle={toggleLabelStyles}>
            {rightSideText || 'OFF'}
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}


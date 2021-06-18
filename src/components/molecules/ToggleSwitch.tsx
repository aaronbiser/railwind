import React, { ReactNode, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import { Flex } from '../atoms/Flex';
import { Box } from '../atoms/Box';
import { AllHTMLElementProps, DivProps } from '../../types';
import { getAllClassNames, getClassNames } from '../../lib/helpers';
// import useActive from '../../lib/hooks/useActive'
// import { isTestEnv } from '../../lib/test'

export const TOGGLE_SWITCH_ID = 'TOGGLE_SWITCH_ID'
export const TOGGLE_SWITCH_ANIMATED_TOGGLE_ID = 'TOGGLE_SWITCH_ANIMATED_TOGGLE_ID'

export interface ToggleSwitchProps extends DivProps {
  isToggled: boolean
  leftSide: ReactNode
  rightSide: ReactNode
  /** Width number is converted to rems */
  labelWidth?: number
  // toggleBgColor?: ThemeBackgroundColor
}

interface Transform {
  translateX: number
  scaleX: number
}

/**
 * `ToggleSwitch` controls the sizing and animates between two states when toggled. The `leftSide` and `rightSide` props determine what content will be shown on each side of the switch. `isToggled` state is not maintined internally and is expected to be passed from a parent container.
 */
export const ToggleSwitch = ({
  isToggled,
  leftSide,
  rightSide,
  onClick,
  labelWidth = 4,
  // toggleBgColor = 'bg-gray-600',
  // rwStyle = {
  //   bgColor: ['bg-gray-200', 'hover:bg-gray-300'],
  //   borderRadius: 'rounded',
  // },
  ...props
}: ToggleSwitchProps) => {
  const ref = useRef<HTMLDivElement>(null)
  // const isActive = useActive(ref)

  const transform = {
    translateX: 0,
    scaleX: 1
  }

  if (isToggled) {
    transform.translateX = labelWidth
  }
  // if (isActive) {
  //   transform.scaleX = 1.2
  // }

  const getTransformProps = (obj: Transform) => `translateX(${obj.translateX}rem) scaleX(${obj.scaleX})`

  // animation toggle
  const [toggleAnimationStyles, setToggleAnimationStyles] = useSpring(() => ({
    config: { duration: 100 },
    transform: getTransformProps({ translateX: 0, scaleX: 1 })
  }))

  setToggleAnimationStyles({ transform: getTransformProps(transform) })

  const toggleStyles: AllHTMLElementProps = {
    position: 'absolute',
    zIndex: 'z-10',
    height: 'h-full',
    shadow: 'shadow-md',
    bgColor: 'bg-gray-600',
    borderRadius: 'rounded'
  }

  return (
    <Box
      {...props}
      forwardRef={ref}
      dataTestId={TOGGLE_SWITCH_ID}
      rwStyle={{
        position: 'relative',
        display: 'inline-block',
        cursor: 'cursor-pointer',
        shadow: 'shadow-inner',
        overflow: 'overflow-hidden',
        bgColor: ['bg-gray-200', 'hover:bg-gray-300'],
        borderRadius: 'rounded',
        select: 'select-none',
        transition: {
          property: 'transition-colors',
          duration: 'duration-75',
          timing: 'ease-in-out'
        }
      }}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => onClick && onClick(e)}
    >
      <animated.div
        data-testid={TOGGLE_SWITCH_ANIMATED_TOGGLE_ID}
        className={getAllClassNames(toggleStyles)}
        style={{
          // skip animation in tests
          // ...isTestEnv ? { transform: getTransformProps(transform) } : toggleAnimationStyles,
          ...toggleAnimationStyles,
          width: `${labelWidth}rem`
        }}
      />
      <Flex
        rwStyle={{
          position: 'relative',
          zIndex: 'z-10',
          flex: 'items-center',
          height: 'h-full'
        }}
        style={{ width: `${labelWidth * 2}rem` }}
      >
        <Box rwStyle={{ flex: 'flex-1' }}>
          {leftSide}
        </Box>
        <Box rwStyle={{ flex: 'flex-1' }}>
          {rightSide}
        </Box>
      </Flex>
    </Box>
  )
}


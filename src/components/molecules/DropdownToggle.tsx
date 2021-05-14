import React, { CSSProperties, useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside'
import { DimensionObject } from '../../hooks/useDimensions/hook';
import UseDimensions from '../../hooks/useDimensions'
import { Box } from '../atoms/Box';
import { DropdownToggleProps } from '../../types'
import { BASE_STYLES } from '../../lib/constants';

export const DROPDOWN = 'DROPDOWN'
export const DROPDOWN_TOGGLE = 'DROPDOWN_TOGGLE'
export const DROPDOWN_CONTENT = 'DROPDOWN_CONTENT'

export const getPositionOffsets = (
  isLeft: boolean,
  isBottom: boolean,
  toggleDim: DimensionObject,
  dropdownDim: DimensionObject
): { left: string, top: string } => {
  return {
    left: `${toggleDim && dropdownDim ? toggleDim.right - (isLeft ? dropdownDim.width : toggleDim.width) : 0}px`,
    top: `${isBottom ? toggleDim.bottom : toggleDim.top - dropdownDim.height}px`
  }
}

export const getIsBottom = (vertical: string): boolean => vertical === 'bottom'
export const getIsLeft = (horizontal: string): boolean => horizontal === 'left'

export const DropdownToggle = ({
  dataTestId,
  toggle,
  dropdownContent,
  dropdownAlignment = {
    vertical: 'bottom',
    horizontal: 'left'
  },
  dropdownPosition = 'absolute',
  componentStyles
}: DropdownToggleProps) => {
  const [isActive, setIsActive] = useState(false)

  // get toggle dimensions
  const [toggleRef, toggleDim] = UseDimensions.useDropdownToggleDimensions(isActive)

  // get dropdown dimensions
  const [dropdownContentRef, dropdownContentDim] = UseDimensions.useDropdownContentDimensions(isActive)

  const ref = useOnclickOutside(() => setIsActive(false))

  const handleClickBtn = () => setIsActive(!isActive)

  const isBottom = getIsBottom(dropdownAlignment.vertical)
  const isLeft = getIsLeft(dropdownAlignment.horizontal)

  const dropdownStyles: CSSProperties = dropdownPosition === 'fixed'
    ? {
      zIndex: 10,
      ...getPositionOffsets(isLeft, isBottom, toggleDim, dropdownContentDim)
    } : {
      zIndex: 100,
      ...isBottom ? { top: '100%' } : { bottom: '100%' },
      ...isLeft ? { left: 'auto', right: 0 } : { left: 0, right: 'auto' }
    }

  return (
    <Box
      forwardRef={ref}
      dataTestId={dataTestId || DROPDOWN}
      rwStyle={{
        position: 'relative',
        display: 'inline-block'
      }}
    >
      {/* toggle */}
      <Box 
        dataTestId={DROPDOWN_TOGGLE} 
        forwardRef={toggleRef} 
        onClick={handleClickBtn}
        style={{ cursor: 'pointer' }}
        rwStyle={{
          ...componentStyles?.dropdownToggle ? componentStyles.dropdownToggle : {
            bgColor: isActive ? 'bg-gray-500' : ['bg-gray-200', 'hover:bg-gray-200'],
            borderColor: 'border-color1-50',
            // borderColor: isActive ? 'border-gray-600' : ['border-gray-400', 'hover:border-gray-500'],
            borderStyle: 'border-solid',
            borderWidth: 'border-DEFAULT',
            borderRadius: 'rounded-md',
            textColor: isActive ? 'text-white' : 'text-gray-600',
            fontWeight: 'font-semibold',
            padding: ['px-4', 'py-2']
          }
        }}
      >
        {typeof toggle === 'function' ? toggle(isActive) : toggle}
      </Box>
      {/* dropdown content */}
      <Box
        dataTestId={DROPDOWN_CONTENT}
        forwardRef={dropdownContentRef}
        rwStyle={componentStyles?.dropdownContent ? componentStyles.dropdownContent : {
          margin: 'my-2',
          bgColor: 'bg-white',
          ...BASE_STYLES.BORDER,
          borderRadius: BASE_STYLES.BORDER_RADIUS,
          textColor: BASE_STYLES.TEXT_COLOR,
          padding: ['px-4', 'py-2']
        }}
        // core functionality styles
        style={{
          display: isActive ? 'block' : 'none',
          position: dropdownPosition,
          ...dropdownStyles,
        }}
      >
        {dropdownContent}
      </Box>
    </Box>
  )
}

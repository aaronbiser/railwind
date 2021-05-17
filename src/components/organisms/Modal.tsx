import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring } from 'react-spring'
import useOnclickOutside from 'react-cool-onclickoutside'
import { ModalProps, ModalSize, ThemeWidthWithMinMax } from '../../types'
import { Box } from '../atoms/Box'
import { Flex } from '../atoms/Flex'
import { Text } from '../atoms/Text'
import { BASE_STYLES } from '../../lib/constants'

const getModalWidthFromSize = (size: ModalSize): ThemeWidthWithMinMax => {
  switch (size) {
    case 'SM':
      return ['w-full', 'max-w-md']
    case 'MD':
      return ['w-full', 'max-w-xl']
    case 'LG':
      return ['w-full', 'max-w-3xl']
  }
}

/**
 *
 * Modals do not control their own state. Add useState in the parent component to control modal toggle state.
 */
export const Modal = ({
  useDefaultStyles = true,
  animated = false,
  toggle,
  onHide = () => {},
  size = 'MD',
  modalContent = null,
  bgOverlayOpacity = 'opacity-75',
  bgOverlayColor,
  showClose = true
}: ModalProps) => {
  
  const handleHideModal = () => {
    toggle && toggle()
    onHide && onHide()
  }

  const modalRef = useOnclickOutside(() => handleHideModal())

  // return null until dom is ready
  let element
  if (typeof window !== 'undefined') {
    element = document.getElementById('modal-root')
  }

  if (!element) return null

  let animatedBg = {}
  let animatedModalTransform = {}

  // animations
  if (animated) {
    animatedBg = useSpring({
      config: { duration: 200 },
      opacity: 1,
      from: { opacity: 0 }
    })
  
    animatedModalTransform = useSpring({
      config: { duration: 200 },
      transform: 'translateY(0px)',
      from: { transform: 'translateY(20px)' }
    })
  }

  return ReactDOM.createPortal(
    <Flex
      animatedStyle={animatedBg}
      rwStyle={{
        flex: ['items-center', 'justify-center'],
        position: ['fixed', 'top-0', 'bottom-0', 'left-0', 'right-0'],
        zIndex: 'z-50',
        overflow: 'overflow-auto'
      }}
    >
      {/* Background overlay color */}
      <Box 
        rwStyle={{ 
          position: ['fixed', 'top-0', 'bottom-0', 'left-0', 'right-0'],
          zIndex: 'z-0',
          opacity: bgOverlayOpacity,
          pointerEvents: 'pointer-events-none',
          bgColor: bgOverlayColor,
          ...useDefaultStyles ? {
            bgColor: 'bg-gray-700', 
          } : {}
        }} 
      />
      <Flex forwardRef={modalRef} rwStyle={{ flex: 'justify-center', width: 'w-full' }}>
        <Box
          animatedStyle={animatedModalTransform}
          rwStyle={{
            position: 'relative',
            zIndex: 'z-10',
            width: getModalWidthFromSize(size),
            ...useDefaultStyles ? {
              bgColor: 'bg-white',
              borderRadius: BASE_STYLES.BORDER_RADIUS
            } : {}
          }}
          >
          {showClose && toggle && (
            <Text 
              rwStyle={{ 
                cursor: 'cursor-pointer',
                position: ['absolute', 'top-0', 'right-0'],
                ...useDefaultStyles ? {
                  textColor: 'text-gray-600',
                  margin: 'm-4',
                } : {},
              }}
              onClick={handleHideModal} 
            >CLOSE</Text>
          )}
          {typeof modalContent === 'function' ? modalContent(handleHideModal) : modalContent}
        </Box>
      </Flex>
    </Flex>,
    element
  )
}


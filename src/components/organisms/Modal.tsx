import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring } from 'react-spring'
import useOnclickOutside from 'react-cool-onclickoutside'
import { AllHTMLElementProps, ModalProps, ModalSize, ThemeWidthWithMinMax } from '../../types'
import { Box } from '../atoms/Box'
import { Flex } from '../atoms/Flex'
import { BASE_STYLES } from '../../lib/constants'

const getModalWidthFromSize = (size: ModalSize): ThemeWidthWithMinMax => {
  switch (size) {
    case 'SM':
      return ['w-full', 'max-w-md']
    case 'MD':
      return ['w-full', 'max-w-xl']
    case 'LG':
      return ['w-full', 'max-w-3xl']
    default:
      return size
  }
}

/**
 *
 * Modals do not control their own state. Add useState in the parent component to control modal toggle state.
 */
export const Modal = ({
  animated = true,
  toggle,
  onHide = () => {},
  size = 'MD',
  modalContent = null,
  useDefaultStyles = true,
  rwStyle
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

  let modalContentStyles: AllHTMLElementProps = rwStyle?.modalContent || {}
  
  if (useDefaultStyles && !rwStyle?.modalContent) {
    modalContentStyles = {
      padding: 'p-8',
      bgColor: 'bg-white',
      borderRadius: BASE_STYLES.BORDER_RADIUS
    }
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
          bgColor: rwStyle?.modalBackground || 'bg-gray-600',
          opacity: rwStyle?.modalOpaciity || 'opacity-75',
          position: ['fixed', 'top-0', 'bottom-0', 'left-0', 'right-0'],
          zIndex: 'z-0',
          pointerEvents: 'pointer-events-none',
        }} 
      />
      <Flex forwardRef={modalRef} rwStyle={{ flex: 'justify-center', width: 'w-full' }}>
        <Box
          animatedStyle={animatedModalTransform}
          rwStyle={{
            ...modalContentStyles,
            position: 'relative',
            zIndex: 'z-10',
            width: getModalWidthFromSize(size),
          }}
        >
          {typeof modalContent === 'function' ? modalContent(handleHideModal) : modalContent}
        </Box>
      </Flex>
    </Flex>,
    element
  )
}


import React from 'react'
import * as Spring from 'react-spring'
import classnames from 'classnames'
import {
  getClassNames,
  getAllClassNames
} from '../lib/helpers'
import { DivProps } from '..'

const Div = ({
  as = 'div',
  container = false,
  forwardRef,
  id,
  dataTestId,
  style,
  onClick,
  children,
  rwStyle,
  animatedStyle
}: DivProps) => {
  let display = rwStyle?.display || 'block'
  if (as === 'span') {
    display = 'inline-block'
  } else if (as === 'li') {
    display = 'list-item'
  }
  
  console.log("🚀 ~ file: Div.tsx ~ line 27 ~ display", display)

  const classNames = classnames({
    ...getClassNames(display),
    ...container ? { 'container': true } : {},
    [getAllClassNames(rwStyle)]: true
  })

  if (animatedStyle && forwardRef) {
    throw new Error('Error: Cannot pass a ref to an animated element. There is a bug in react-spring that causes an infinite loop.')
  }

  return React.createElement(
    // @ts-ignore
    animatedStyle && as ? Spring.animated[as] : as,
    {
      id: id,
      ref: forwardRef,
      'data-testid': dataTestId,
      className: classNames,
      style: {
        ...style,
        ...animatedStyle
      },
      onClick
    },
    children
  )
}

export default Div

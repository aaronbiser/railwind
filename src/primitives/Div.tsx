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
  const classNames = classnames({
    ...getClassNames(as === 'span' ? 'inline-block' : rwStyle?.display),
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

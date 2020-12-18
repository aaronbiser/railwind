import React from 'react'
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
  rwStyle
}: DivProps) => {

  const classNames = classnames({
    ...getClassNames(as === 'span' ? 'inline-block' : rwStyle?.display),
    ...container ? { 'container': true } : {},
    [getAllClassNames(rwStyle)]: true
  })

  return React.createElement(
    as,
    {
      id: id,
      ref: forwardRef,
      'data-testid': dataTestId,
      className: classNames,
      style,
      onClick
    },
    children
  )
}

export default Div

import React from 'react'
import classnames from 'classnames'
import {
  getClassNames,
  getAllClassNames
} from '../../lib/helpers'
import { DivProps } from '../..'

const Div = ({
  forwardRef,
  id,
  dataTestId,
  style,
  onClick,
  children,
  as = 'div',
  container = false,
  ...props
}: DivProps) => {

  const classNames = classnames({
    ...getClassNames(as === 'span' ? 'inline-block' : props.display),
    ...container ? { 'container': true } : {},
    [getAllClassNames(props)]: true
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

import React from 'react'
import { getAllClassNames } from '../../lib/helpers'
import { TextProps } from '../../types'

export const Text = ({
  forwardRef,
  id,
  dataTestId,
  style,
  onClick,
  children,
  ...props
}: TextProps) => {
  return (
    <p className={getAllClassNames(props)}>{children}</p>
  )
}
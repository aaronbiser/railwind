import React, { ReactElement } from 'react'
import { getAllClassNames } from '../lib/helpers'
import { TextProps } from '../types'

export const Text = ({
  forwardRef,
  id,
  dataTestId,
  onClick,
  children,
  rwStyle
}: TextProps): ReactElement => {
  return (
    <p
      ref={forwardRef}
      id={id}
      data-testid={dataTestId}
      onClick={onClick}
      className={getAllClassNames(rwStyle)}
    >{children}</p>
  )
}
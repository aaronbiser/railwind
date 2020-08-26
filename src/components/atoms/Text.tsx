import React, { ReactElement } from 'react'
import { getAllClassNames } from '../../lib/helpers'
import { TextProps } from '../../types'

export const Text = ({
  forwardRef,
  id,
  dataTestId,
  style,
  onClick,
  children,
  rwStyle
}: TextProps): ReactElement => {
  return (
    <p
      ref={forwardRef}
      id={id}
      data-testid={dataTestId}
      style={style}
      onClick={onClick}
      className={getAllClassNames(rwStyle)}
    >{children}</p>
  )
}
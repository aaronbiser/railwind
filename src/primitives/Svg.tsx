import React, { ReactElement } from 'react'
import { getAllClassNames } from '../lib/helpers'
import { SvgProps } from '../types'

export const Svg = ({
  rwStyle,
  dataTestId, 
  children, 
  ...props 
}: SvgProps): ReactElement => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      data-testid={dataTestId}
      className={getAllClassNames(rwStyle)}
    >
      {children}
    </svg>
  )
}

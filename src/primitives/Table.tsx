import React, { ReactElement } from 'react'
import { getAllClassNames } from '../lib/helpers'
import { TableProps } from '../types'

export const Table = ({ 
  dataTestId,
  forwardRef,
  rwStyle,
  children,
   ...props 
}: TableProps): ReactElement => {
  return (
    <table
      {...props}
      ref={forwardRef}
      data-testid={dataTestId}
      className={getAllClassNames(rwStyle)}
    >{children}</table>
  )
}

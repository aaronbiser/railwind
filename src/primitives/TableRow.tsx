import React, { ReactElement } from 'react'
import { getAllClassNames } from '../lib/helpers'
import { TableRowProps } from '../types'

export const TableRow = ({
  forwardRef,
  dataTestId,
  children,
  rwStyle,
  ...props
}: TableRowProps): ReactElement => {
  return (
    <tr
      {...props}
      ref={forwardRef}
      data-testid={dataTestId}
      className={getAllClassNames(rwStyle)}
    >{children}</tr>
  )
}

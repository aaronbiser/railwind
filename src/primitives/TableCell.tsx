import React, { ReactElement } from 'react'
import { getAllClassNames } from '../lib/helpers'
import { TableCellProps } from '../types'

export const TableCell = ({
  as,
  forwardRef,
  dataTestId,
  children,
  rwStyle,
  ...props
}: TableCellProps): ReactElement => {
  return React.createElement(
    as,
    {
      ...props,
      ref: forwardRef,
      'data-testid': dataTestId,
      className: getAllClassNames(rwStyle)
    },
    children
  )
}

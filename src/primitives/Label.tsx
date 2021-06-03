import React, { ReactElement } from 'react'
import { getAllClassNames } from '../lib/helpers'
import { AllHTMLElementProps, LabelProps } from '../types'

export const Label = ({ rwStyle, ...props }: LabelProps): ReactElement => {
  const styles: AllHTMLElementProps = rwStyle || {
    display: 'block'
  }

  return (
    <label
      {...props}
      ref={props.forwardRef}
      data-testid={props.dataTestId}
      className={getAllClassNames(styles)}
    >{props.children}</label>
  )
}
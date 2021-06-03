import React, { ReactElement } from 'react'
import { getAllClassNames } from '../lib/helpers'
import { AllHTMLElementProps, InputProps } from '../types'

export const Input = ({ type = 'text', rwStyle, ...props }: InputProps): ReactElement => {
  const styles: AllHTMLElementProps = rwStyle || {
    borderColor: 'border-gray-300',
    borderStyle: 'border-solid',
    borderWidth: 'border',
    borderRadius: 'rounded-md',
    padding: ['px-3', 'py-2'],
    shadow: 'shadow-inner'
  }

  return (
    <input
      {...props}
      ref={props.forwardRef}
      type={type}
      data-testid={props.dataTestId}
      className={getAllClassNames(styles)}
    />
  )
}
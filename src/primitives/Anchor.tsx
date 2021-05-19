import React, { ReactElement } from 'react'
import { getAllClassNames } from '../lib/helpers'
import { AnchorProps } from '../types'

export const Anchor = ({ rwStyle, ...props }: AnchorProps): ReactElement => {
  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (props.preventDefault) {
      e.preventDefault()
    }
    props.onClick && props.onClick(e)
  }

  return (
    <a
      {...props}
      ref={props.forwardRef}
      data-testid={props.dataTestId}
      onClick={handleOnClick}
      className={getAllClassNames(rwStyle)}
    >{props.children}</a>
  )
}
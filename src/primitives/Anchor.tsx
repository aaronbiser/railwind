import React, { ReactElement } from 'react'
import { getAllClassNames } from '../lib/helpers'
import { AllHTMLElementProps, AnchorProps } from '../types'

export const Anchor = ({ rwStyle, ...props }: AnchorProps): ReactElement => {
  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (props.preventDefault) {
      e.preventDefault()
    }
    props.onClick && props.onClick(e)
  }

  const anchorStyles: AllHTMLElementProps = rwStyle || {
    textColor: ['text-link', 'hover:text-link-hover'],
    textDecoration: 'underline'
  }

  return (
    <a
      {...props}
      ref={props.forwardRef}
      data-testid={props.dataTestId}
      onClick={handleOnClick}
      className={getAllClassNames(anchorStyles)}
    >{props.children}</a>
  )
}
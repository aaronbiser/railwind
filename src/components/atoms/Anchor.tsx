import React, { ReactElement } from 'react'
import { getAllClassNames } from '../../lib/helpers'
import { AnchorProps } from '../../types'

export const Anchor = ({
  preventDefault,
  forwardRef,
  id,
  href,
  dataTestId,
  style,
  hreflang,
  ping,
  target,
  referrerPolicy,
  rel,
  type,
  download,
  onClick,
  children,
  rwStyle
}: AnchorProps): ReactElement => {
  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (preventDefault) {
      e.preventDefault()
    }
    onClick && onClick(e)
  }

  return (
    <a
      href={href}
      ref={forwardRef}
      id={id}
      data-testid={dataTestId}
      style={style}
      hrefLang={hreflang}
      ping={ping}
      target={target}
      referrerPolicy={referrerPolicy}
      rel={rel}
      type={type}
      download={download}
      onClick={handleOnClick}
      className={getAllClassNames(rwStyle)}
    >{children}</a>
  )
}
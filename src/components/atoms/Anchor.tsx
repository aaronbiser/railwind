import React from 'react'
import { getAllClassNames } from '../../lib/helpers'
import { AnchorProps } from '../../types'

export const Anchor = ({
  forwardRef,
  id,
  dataTestId,
  style,
  href,
  hreflang,
  media,
  ping,
  target,
  referrerpolicy,
  rel,
  type,
  download,
  preventDefault,
  onClick,
  children,
  ...props
}: AnchorProps) => {
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
      media={media}
      ping={ping}
      target={target}
      referrerPolicy={referrerpolicy}
      rel={rel}
      type={type}
      download={download}
      onClick={handleOnClick}
      className={getAllClassNames(props)}
    >{children}</a>
  )
}
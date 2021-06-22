import React, { FC } from 'react'
import { Anchor } from '../../primitives/Anchor'
import { Svg } from '../../primitives/Svg'
import { SvgProps } from '../../types'
import { Flex } from './Flex'

export const ICON_TEST_ID = 'ICON_TEST_ID'
export const ICON_PARENT_ANCHOR = 'ICON_PARENT_ANCHOR'
export const ICON_PARENT_DIV = 'ICON_PARENT_DIV'

export const Icon: FC<SvgProps> = ({
  dataTestId = ICON_TEST_ID,
  href = '',
  target = '_blank',
  onClick,
  rwStyle = {
    width: 'w-24',
    height: 'h-24',
    fill: 'fill-current'
  },
  children,
  ...props
}) => {
  const svg = (
    <Flex
      rwStyle={{
        ...rwStyle,
        cursor: rwStyle?.cursor || (onClick || href ? 'cursor-pointer' : 'cursor-auto'),
      }}
    >
      <Svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox={props.viewBox} // example "0 0 24 24"
        data-testid={dataTestId}
        onClick={!href && onClick ? (e: React.MouseEvent<SVGElement>) => onClick(e) : () => { }}
      >
        <>
          {props.name && <title>{props.name}</title>}
          {children}
        </>
      </Svg>
    </Flex>
  )

  if (href) {
    <Anchor
      href={href}
      target={target}
      rwStyle={{ width: rwStyle.width, height: rwStyle.height }}
    >
      {svg}
    </Anchor>
  }

  return svg
}

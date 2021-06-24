import React, { FC } from 'react'
import { Anchor } from '../../primitives/Anchor'
import { Svg } from '../../primitives/Svg'
import { IconProps } from '../../types'
import { Flex } from './Flex'

export const ICON_TEST_ID = 'ICON_TEST_ID'
export const ICON_PARENT_ANCHOR = 'ICON_PARENT_ANCHOR'
export const ICON_PARENT_DIV = 'ICON_PARENT_DIV'

export const Icon: FC<IconProps> = ({
  dataTestId = ICON_TEST_ID,
  href = '',
  target = '_blank',
  onClick,
  path,
  rwStyle = {
    width: 'w-full',
    height: 'h-auto',
    fill: 'fill-current'
  },
  ...props
}) => {
  if (!props.viewBox) {
    throw new Error('Use of SVG requires "viewBox" prop')
  }

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
          <path d={path} />
        </>
      </Svg>
    </Flex>
  )
  
  if (href) {
    <Anchor
      href={href}
      target={target}
      rwStyle={{ width: 'w-auto', height: 'h-auto' }}
    >
      {svg}
    </Anchor>
  }

  return svg
}

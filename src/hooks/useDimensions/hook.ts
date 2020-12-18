/* global HTMLElement */
import { useState, useCallback, useLayoutEffect, RefCallback } from 'react'
import { isTestEnv } from '../../lib/helpers'
import getBoundingClientRect from './getBoundingClientRect'

export interface DimensionObject {
  width: number,
  height: number,
  top: number,
  left: number,
  x: number,
  y: number,
  right: number,
  bottom: number
}

export type UseDimensionsHook = [
  RefCallback<HTMLElement>,
  DimensionObject,
  HTMLElement | null
]

export interface UseDimensionsArgs {
  liveMeasure?: boolean,
  active?: boolean
}

function getDimensionObject (node: HTMLElement | null): DimensionObject {
  const rect = getBoundingClientRect(node)

  return {
    width: rect?.width || 0,
    height: rect?.height || 0,
    top: rect?.top || 0,
    left: rect?.left || 0,
    x: rect?.x || 0,
    y: rect?.y || 0,
    right: rect?.right || 0,
    bottom: rect?.bottom || 0
  }
}


export function useDimensions ({
  liveMeasure = true,
  active = false
}: UseDimensionsArgs = {}): UseDimensionsHook {
  const [dimensions, setDimensions] = useState<DimensionObject>({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    x: 0,
    y: 0,
    right: 0,
    bottom: 0
  })
  const [node, setNode] = useState(null)

  const ref = useCallback(node => {
    setNode(node)
  }, [])

  useLayoutEffect(() => {
    if (node || isTestEnv()) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setDimensions(getDimensionObject(node))
        )
      measure()

      if (liveMeasure) {
        window.addEventListener('resize', measure)
        window.addEventListener('mousewheel', measure)

        return () => {
          window.removeEventListener('resize', measure)
          window.removeEventListener('mousewheel', measure)
        }
      }
    }
  }, [active])

  return [ref, dimensions, node]
}

export default useDimensions

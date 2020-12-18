import { ReactNode, RefCallback } from 'react'
import useDimensions, { DimensionObject, UseDimensionsHook } from './hook'

const useDropdownToggleDimensions = function useDropdownToggleDimensions (
  isActive: boolean
): UseDimensionsHook {
  return useDimensions({ active: isActive })
}

const useDropdownContentDimensions = function useDropdownContentDimensions (
  isActive: boolean
): UseDimensionsHook {
  return useDimensions({ active: isActive, liveMeasure: true })
}

const exportFunctions = {
  useDimensions,
  useDropdownToggleDimensions,
  useDropdownContentDimensions
}

export default exportFunctions

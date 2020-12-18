import { 
  BorderStyleOptions, 
  ThemeBorderColorOptions, 
  ThemeBorderRadiusOptions, 
  ThemeBorderWidthOptions, 
  ThemeTextColorOptions 
} from "../types/tailwind.types";

export const BASE_STYLES = {
  TEXT_COLOR: 'text-gray-700' as ThemeTextColorOptions,
  BORDER_RADIUS: 'rounded' as ThemeBorderRadiusOptions,
  BORDER: {
    borderColor: 'border-gray-400' as ThemeBorderColorOptions,
    borderWidth: 'border' as ThemeBorderWidthOptions,
    borderStyle: 'border-solid' as BorderStyleOptions,
  }
} 

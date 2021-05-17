require('dotenv').config()
const { flatten, flattenDeep } = require('lodash')
const fs = require('fs')
const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require("../../tailwind.config.js")
const config = resolveConfig(tailwindConfig)
const { theme } = config

const fileLocation = "./src/types/tailwind.types.ts"

const getVariants = (selector) => {
  // some properties do not have varients
  const getThemeVariants = config.variants[selector] || []

  const variants = ['', ...Object.keys(theme.screens), ...getThemeVariants]
  const index = variants.indexOf('responsive')
  if (index >= 0) {
    variants.splice(index, 1)
  }

  return variants
}

const getTypeString = (variants, prefix, key, shouldReturnKey) => {
  let type = ''

  for (let index = 0; index < variants.length; index++) {
    const variant = variants[index]
    type = `${type}${index === 0 ? '' : ' '}| '${variant}${variant ? ':' : ''}${prefix}${prefix && shouldReturnKey ? '-' : ''}${shouldReturnKey ? key : ''}'`
  }

  return type
}

const checkShouldReturnKey = (shouldReturnDefault, key) => {
  let shouldReturnKey = shouldReturnDefault
  
  // we don't want to return -DEFAULT in the types
  // Ex: border: { 'DEFAULT': '1px' } should not return "border-DEFAULT"
  if (!shouldReturnDefault && key.toLowerCase() !== 'default') {
    shouldReturnKey = true
  }

  return shouldReturnKey
}

const appendClassNamesToType = (classNames) => {
  let classNamesString = ''

  for (let index = 0; index < classNames.length; index++) {
    classNamesString = `'${classNames[index]}' | ${classNamesString}`
  }

  return classNamesString
}

const generateSpacingTypes = (data, spacingObj) => {
  const marginPrefixes = [
    'm', '-m',
    'mx', '-mx',
    'my', '-my',
    'mt', '-mt',
    'mb', '-mb',
    'ml', '-ml',
    'mr', '-mr'
  ]
  const paddingPrefixes = [
    'p', '-p',
    'px', '-px',
    'py', '-py',
    'pt', '-pt',
    'pb', '-pb',
    'pl', '-pl',
    'pr', '-pr'
  ]

  const getSpacingType = (data, prefixes, sizes) => flattenDeep(Object.entries(data).map(s => {
    const spacingKey = s[0]

    const spacing = flatten(prefixes.map(pre => {
      const responsiveSpacing = sizes.map(rs => {
        return `'${rs}:${pre}-${spacingKey}'`
      })

      const baseSpacing = `'${pre}-${spacingKey}'`

      return [...responsiveSpacing, baseSpacing]
    }))

    return spacing
  }))

  const responsiveSizes = Object.keys(theme.screens)

  const paddingType = getSpacingType(spacingObj, paddingPrefixes, responsiveSizes)
  const marginType = getSpacingType(spacingObj, marginPrefixes, responsiveSizes)

  const paddingSpacingType = paddingType.toString().replace(/,/g, ' | ')
  const marginSpacingType = marginType.toString().replace(/,/g, ' | ')

  return `${data} 
    export type ThemePaddingSpacing = ThemePaddingSpacingOptions | ThemePaddingSpacingOptions[]

    export type ThemePaddingSpacingOptions = ${paddingSpacingType}
    
    export type ThemeMarginSpacing = ThemeMarginSpacingOptions | ThemeMarginSpacingOptions[] 

    export type ThemeMarginSpacingOptions = ${marginSpacingType}
  `
}

const generateColorType = (data, themeValues, selector, prefix, outputTypeName, classNames = [], shouldReturnDefault = false) => {
  let type = ''

  if (!themeValues) {
    return type
  }

  const variants = getVariants(selector)

  Object.entries(themeValues).map(c => {
    const key = c[0]
    const value = c[1]

    const shouldReturnKey = checkShouldReturnKey(shouldReturnDefault, key)

    if (typeof value === 'string') {
      type = `${type} ${getTypeString(variants, prefix, key, shouldReturnKey)}`
    }
    else {
      // get color value and add to key
      Object.entries(value).map(cv => {
        const ckey = cv[0]
        type = `${type} ${getTypeString(variants, prefix, `${key}-${ckey}`, shouldReturnKey)}`
      })
    }
  })

  // add one off tailwind classNames to type output
  if (classNames.length !== 0) {
    for (let index = 0; index < classNames.length; index++) {
      const className = classNames[index]

      type = `${getTypeString(variants, prefix, className, true)} ${type}`
    }
  }

  // remove first instance of " | " from beginning of string
  type = type.replace('| ', '')

  return `${data}
    export type ${outputTypeName} = ${outputTypeName}Options | ${outputTypeName}Options[]

    export type ${outputTypeName}Options = ${type}
  `
}

const generateType = (data, themeValues, selector, prefix, outputTypeName, classNames = [], shouldReturnDefault = false) => {
  let type = ''

  const variants = getVariants(selector)

  Object.keys(themeValues).map(key => {
    const shouldReturnKey = checkShouldReturnKey(shouldReturnDefault, key)
    
    type = `${type} ${getTypeString(variants, prefix, key, shouldReturnKey)}`
  })

  // add one off tailwind classNames to type output
  if (classNames.length !== 0) {
    type = `${appendClassNamesToType(classNames)} ${type}`
  }

  return `${data}
  export type ${outputTypeName} = ${outputTypeName}Options | ${outputTypeName}Options[]

  export type ${outputTypeName}Options =${type.replace('| ', '')}
  `
}

const createPositionObj = (data, theme, selector, pos, typeName) => {
  theme = {
    ...theme,
    [selector]: theme[selector]
  }

  return data = generateType(data, theme[selector], selector, pos, typeName)
}

let dataToWrite = '////// DO NOT EDIT THIS FILE DIRECTLY //////'

const twValues = {
  overflow: {
    auto: 'auto',
    hidden: 'hidden',
    visible: 'visible'
  },
  justifyContent: {
    start: 'start',
    center: 'center',
    between: 'between',
    end: 'end',
    around: 'around'
  },
  alignItems: {
    stretch: 'stretch',
    start: 'start',
    center: 'center',
    end: 'end',
    baseline: 'baseline'
  },
  borderStyle: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    double: 'double',
    none: 'none'
  },
  display: {
    'flex': 'flex',
    'block': 'block',
    'inline': 'inline',
    'inline-flex': 'inline-flex',
    'inline': 'inline',
    'inline-block': 'inline-block',
    'hidden': 'hidden',
    'grid': 'grid',
    'table': 'table',
    'table-caption': 'table-caption',
    'table-cell': 'table-cell',
    'table-column': 'table-column',
    'table-column-group': 'table-column-group',
    'table-footer-group': 'table-footer-group',
    'table-header-group': 'table-header-group',
    'table-row-group': 'table-row-group',
    'table-row': 'table-row'
  },
  flexWrap: {
    'no-wrap': 'no-wrap',
    'wrap': 'wrap',
    'wrap-reverse': 'wrap-reverse'
  },
  flexDirection: {
    'row': 'row',
    'row-reverse': 'row-reverse',
    'col': 'col',
    'col-reverse': 'col-reverse'
  },
  float: {
    left: 'left',
    right: 'right',
    none: 'none'
  },
  outline: {
    none: 'none'
  },
  pointerEvents: {
    none: 'none',
    auto: 'auto'
  },
  position: {
    static: 'static',
    fixed: 'fixed',
    absolute: 'absolute',
    relative: 'relative',
    sticky: 'sticky'
  },
  textAlign: {
    'left': 'left',
    'right': 'right',
    'center': 'center',
    'justify': 'justify'
  },
  textDecoration: {
    'underline': 'underline',
    'line-through': 'line-through',
    'no-underline': 'no-underline'
  },
  whiteSpace: {
    'normal': 'normal',
    'no-wrap': 'no-wrap',
    'pre': 'pre',
    'pre-line': 'pre-line',
    'pre-wrap': 'pre-wrap'
  }
}

dataToWrite = generateType(dataToWrite, theme.backgroundPosition, 'backgroundPosition', 'bg', 'ThemeBackgroundPosition')
dataToWrite = generateType(dataToWrite, theme.backgroundSize, 'backgroundSize', 'bg', 'ThemeBackgroundSize')
dataToWrite = generateType(dataToWrite, theme.borderRadius, 'borderRadius', 'rounded', 'ThemeBorderRadius')
dataToWrite = createPositionObj(dataToWrite, theme, 'borderRadius', 'rounded-t', 'ThemeBorderRadiusTop')
dataToWrite = createPositionObj(dataToWrite, theme, 'borderRadius', 'rounded-b', 'ThemeBorderRadiusBottom')
dataToWrite = createPositionObj(dataToWrite, theme, 'borderRadius', 'rounded-l', 'ThemeBorderRadiusLeft')
dataToWrite = createPositionObj(dataToWrite, theme, 'borderRadius', 'rounded-r', 'ThemeBorderRadiusRight')
dataToWrite = generateType(dataToWrite, theme.borderWidth, 'borderWidth', 'border', 'ThemeBorderWidth')
dataToWrite = generateType(dataToWrite, theme.borderWidth, 'borderWidth', 'border-r', 'ThemeBorderWidthRight')
dataToWrite = generateType(dataToWrite, theme.borderWidth, 'borderWidth', 'border-l', 'ThemeBorderWidthLeft')
dataToWrite = generateType(dataToWrite, theme.borderWidth, 'borderWidth', 'border-t', 'ThemeBorderWidthTop')
dataToWrite = generateType(dataToWrite, theme.borderWidth, 'borderWidth', 'border-b', 'ThemeBorderWidthBottom')
dataToWrite = generateType(dataToWrite, theme.boxShadow, 'boxShadow', 'shadow', 'ThemeBoxShadow')
dataToWrite = generateType(dataToWrite, theme.cursor, 'cursor', 'cursor', 'ThemeCursor', [], true)
dataToWrite = generateType(dataToWrite, theme.fontFamily, 'fontFamily', 'font', 'ThemeFont')
dataToWrite = generateType(dataToWrite, theme.fontSize, 'fontSize', 'text', 'ThemeFontSize')
dataToWrite = generateType(dataToWrite, theme.fontWeight, 'fontWeight', 'font', 'ThemeFontWeight')
dataToWrite = generateType(dataToWrite, theme.flex, 'flex', 'flex', 'ThemeFlex')
dataToWrite = generateType(dataToWrite, theme.flexGrow, 'flexGrow', 'flex-grow', 'ThemeFlexGrow')
dataToWrite = generateType(dataToWrite, theme.flexShrink, 'flexShrink', 'flex-shrink', 'ThemeFlexShrink')
dataToWrite = generateType(dataToWrite, theme.height, 'height', 'h', 'ThemeHeight')
dataToWrite = generateType(dataToWrite, theme.letterSpacing, 'letterSpacing', 'tracking', 'ThemeLetterSpacing')
dataToWrite = generateType(dataToWrite, theme.lineHeight, 'lineHeight', 'leading', 'ThemeLineHeight')
dataToWrite = generateType(dataToWrite, theme.listStyleType, 'listStyleType', 'list', 'ThemeListStyleType')
dataToWrite = generateType(dataToWrite, theme.maxHeight, 'maxHeight', 'max-h', 'ThemeMaxHeight')
dataToWrite = generateType(dataToWrite, theme.maxWidth, 'maxWidth', 'max-w', 'ThemeMaxWidth')
dataToWrite = generateType(dataToWrite, theme.minHeight, 'minHeight', 'min-h', 'ThemeMinHeight')
dataToWrite = generateType(dataToWrite, theme.minWidth, 'minWidth', 'min-w', 'ThemeMinWidth')
dataToWrite = generateType(dataToWrite, theme.objectPosition, 'objectPosition', 'object', 'ThemeObjectPosition')
dataToWrite = generateType(dataToWrite, theme.opacity, 'opacity', 'opacity', 'ThemeOpacity')
dataToWrite = generateType(dataToWrite, theme.stroke, 'stroke', 'stroke', 'ThemeStroke')
dataToWrite = generateType(dataToWrite, theme.width, 'width', 'w', 'ThemeWidth')
dataToWrite = generateType(dataToWrite, theme.zIndex, 'zIndex', 'z', 'zIndex')
// transitions
dataToWrite = generateType(dataToWrite, theme.transitionProperty, 'transitionProperty', 'transition', 'TransitionProperty')
dataToWrite = generateType(dataToWrite, theme.transitionTimingFunction, 'transitionTimingFunction', 'ease', 'TransitionTimingFunction')
dataToWrite = generateType(dataToWrite, theme.transitionDuration, 'transitionDuration', 'duration', 'TransitionDuration')
// margin and padding
dataToWrite = generateSpacingTypes(dataToWrite, theme.spacing)
// colors - reference theme color object
dataToWrite = generateColorType(dataToWrite, theme.textColor, 'textColor', 'text', 'ThemeTextColor', ['inherit'])
dataToWrite = generateColorType(dataToWrite, theme.borderColor, 'borderColor', 'border', 'ThemeBorderColor')
dataToWrite = generateColorType(dataToWrite, theme.backgroundColor, 'backgroundColor', 'bg', 'ThemeBackgroundColor')
dataToWrite = generateColorType(dataToWrite, theme.placeholderColor, 'placeholderColor', 'placeholder', 'ThemePlaceholderColor')
dataToWrite = generateColorType(dataToWrite, theme.fill, 'fill', 'fill', 'ThemeFillColor')
// positioning
dataToWrite = createPositionObj(dataToWrite, theme, 'inset', 'top', 'ThemePositionTop')
dataToWrite = createPositionObj(dataToWrite, theme, 'inset', 'bottom', 'ThemePositionBottom')
dataToWrite = createPositionObj(dataToWrite, theme, 'inset', 'left', 'ThemePositionLeft')
dataToWrite = createPositionObj(dataToWrite, theme, 'inset', 'right', 'ThemePositionRight')
// tailwind mapped values
dataToWrite = generateType(dataToWrite, twValues.overflow, 'overflow', 'overflow', 'Overflow')
dataToWrite = generateType(dataToWrite, twValues.justifyContent, 'justifyContent', 'justify', 'JustifyContent')
dataToWrite = generateType(dataToWrite, twValues.alignItems, 'alignItems', 'items', 'AlignItems')
dataToWrite = generateType(dataToWrite, twValues.borderStyle, 'borderStyle', 'border', 'BorderStyle')
dataToWrite = generateType(dataToWrite, twValues.display, 'display', '', 'Display')
dataToWrite = generateType(dataToWrite, twValues.flexWrap, 'flexWrap', 'flex', 'FlexWrap')
dataToWrite = generateType(dataToWrite, twValues.flexDirection, 'flexDirection', 'flex', 'FlexDirection')
dataToWrite = generateType(dataToWrite, twValues.float, 'float', 'float', 'Float')
dataToWrite = generateType(dataToWrite, twValues.outline, 'outline', 'outline', 'Outline')
dataToWrite = generateType(dataToWrite, twValues.pointerEvents, 'pointerEvents', 'pointer-events', 'PointerEvents')
dataToWrite = generateType(dataToWrite, twValues.position, 'position', '', 'Position')
dataToWrite = generateType(dataToWrite, twValues.textAlign, 'textAlign', 'text', 'TextAlign')
dataToWrite = generateType(dataToWrite, twValues.textDecoration, 'textDecoration', '', 'TextDecoration')
dataToWrite = generateType(dataToWrite, twValues.whiteSpace, 'whiteSpace', 'whitespace', 'WhiteSpace')

// write final types file
fs.writeFile(fileLocation, dataToWrite, (err) => {
  if (err) console.log(err)
  console.log(`Successfully updated tailwind type file to ${fileLocation} `)
})


const styleRank = [
  // margin
  'margin',
  'margin-y', 'margin-top', 'margin-bottom', 'margin-x', 'margin-left', 'margin-right',
  // border
  'box-shadow',
  'border-radius',
  'border', 'border-width', 'border-style', 'border-color',
  // transform
  'transform', 
  'background', 'background-color', 'background-image', 'background-position', 'background-size', 'background-repeat',
  'cursor', 'user-select',
  // position
  'position', 'absolute',  'fixed', 'sticky', 'static',
  'z-index',
  'top', 'bottom', 'left', 'right',
  // display
  'display',
  'box-sizing',
  // vertical
  'align-items',
  'height', 'max-height', 'min-height', 
  // horizontal
  'justify-content',
  'flex-grow', 'flex-shrink',
  'width', 'min-width','max-width', 
  // padding
  'padding',
  'padding-y', 'padding-top', 'padding-bottom', 'padding-x', 'padding-left', 'padding-right',
  // font
  'line-height',
  'text-align',
  'font-size',
  'font-weight',
  'color',
]

const styleRankObj = (() => {
  const res = {}
  styleRank.forEach((className, index) => {
    res[className] = index + 1
  })
  return res
})()


const MAX_RANK_NUM = 9999
export const getStyleRank = (styleKey: string) => {
  return styleRankObj[styleKey] ? styleRankObj[styleKey] : MAX_RANK_NUM
}


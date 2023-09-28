const styleRank = [
  // margin
  'margin',
  'margin-top', 'margin-bottom', 'margin-left', 'margin-right',
  // border
  'box-shadow',
  'border', 'border-color', 'border-width', 'border-style',
  // transform
  'transform', 
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
  'justify-',
  'flex-grow', 'flex-shrink',
  'width', 'min-width','max-width', 
  // padding
  'padding',
  'padding-top', 'padding-bottom', 'padding-left', 'padding-right',
  // font
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


const classNameRank = [
  // margin
  'm-',
  'my-',
  'mx-',
  'mt-', 'mb-', 'ml-', 'mr-',
  // border
  'shadow-',
  'border', 'border-',
  'rounded', 'rounded-',
  // transform
  'scale-', 'rotate-', 'translate-', 'skew-', 'origin-',
  'cursor-', 'select-',
  // position
  'relative', 'absolute',  'fixed', 'sticky', 'static',
  'z-',
  'top-', 'bottom-', 'left-', 'right-',
  // display
  'flex', 'block', 'inline-block',
  // vertical
  'items-',
  'h-', 'max-h-', 'min-h-',
  // horizontal
  'justify-',
  'grow', 'grow-0', 'shrink', 'shrink-0',
  'w-', 'max-w-', 'min-w-',
  // padding
  'p-',
  'py-',
  'px-',
  'pt-', 'pb-', 'pl-', 'pr-',
  // font
  'text-left' ,'text-center', 'text-right', // align
  'text-[', 'text-xs', 'text-sm', 'text-md', 'text-lg', // size
  'font-', // weight
  'text-gray-', // color
  // child
  'space-y-',
  'space-x-',
  'divide-'
]

const classNameRankObj = (() => {
  const res = {}
  classNameRank.forEach((className, index) => {
    res[className] = index + 1
  })
  return res
})()


export const getClassNameRank = (fullClassName: string) => {
  /* m-1 => m-;
  * space-y-1 => space-y-; 
  * text-gray-500 => text-; TODO how to diff。 color value
  * text-xs => text-xs
  */
  const hasDynamicValue = fullClassName.includes('-[')
  const className = (
    !classNameRankObj[fullClassName] && fullClassName.includes('-') 
  ) ? (fullClassName.split('-').slice(0, -1).join('-') + '-' + (hasDynamicValue ? '[' : '')) : fullClassName
  // TODO handle dynamic value:  text-[13px]
  if(classNameRankObj[className]) {
    return classNameRankObj[className]
  }
  return 999
}


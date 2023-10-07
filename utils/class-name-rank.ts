import classNameRank from '@/config/class-name-rank'

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


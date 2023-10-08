'use client'
import React, { FC } from 'react'
import cn from 'classnames'
type Props = {
  style: React.CSSProperties
  className?: string
}

const Preview: FC<Props> = ({
  style,
  className
}) => {
  return (
    <div className={cn(className)}>
      <div className='mt-4 text-xl font-bold'>Preview</div>
      <div
        className='flex justify-center p-3 rounded-xl shadow-xl bg-slate-50'
      >
        <div style={style}>
          Text
        </div>
      </div>
    </div>
  )
}
export default React.memo(Preview)


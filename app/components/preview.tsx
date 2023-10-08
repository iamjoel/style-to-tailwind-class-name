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
    <div className={cn(className, 'mt-4')}>
      <div className='text-xl font-bold'>Preview</div>
      <div
        className='mt-2 flex justify-center p-3 rounded-xl shadow-xl bg-slate-50'
      >
        <div style={style}>
          Text
        </div>
      </div>
    </div>
  )
}
export default React.memo(Preview)


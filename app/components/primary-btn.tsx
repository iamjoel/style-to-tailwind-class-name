'use client'
import React, { FC } from 'react'
import { Button } from '@chakra-ui/react'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  onClick: () => void
}

const PrimaryBtn: FC<Props> = ({
  children,
  className,
  size = 'sm',
  onClick
}) => {
  return (
    <Button
      className={cn(className)}
      colorScheme='teal'
      size={size}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
export default React.memo(PrimaryBtn)


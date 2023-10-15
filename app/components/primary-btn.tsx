'use client'
import React, { FC } from 'react'
import { Button } from '@chakra-ui/react'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  onClick: () => void
}

const PrimaryBtn: FC<Props> = ({
  children,
  className,
  variant = 'solid',
  size = 'sm',
  onClick
}) => {
  return (
    <Button
      className={cn(className)}
      colorScheme='teal'
      variant={variant}
      size={size}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
export default React.memo(PrimaryBtn)


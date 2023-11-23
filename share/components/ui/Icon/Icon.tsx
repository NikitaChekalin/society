import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

import cn from 'classnames'

import s from './Icon.module.scss'

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports
  size?: number
  color?: string
  className?: string
}

export const Icon = ({ name, size, color = '#7c7275', className, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name])

  return <LucideIcon color={color} size={size} {...props} className={cn(s.root, className)} />
}

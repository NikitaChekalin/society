import cn from 'classnames'
import { type LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'

import s from './Icon.module.scss'

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports
  size?: number
  color?: string
  className?: string
  hover?: boolean
}

export const Icon: React.FC<IconProps> = ({
  name,
  size,
  color = '#7c7275',
  className,
  hover = true,
  ...props
}) => {
  const LucideIcon = dynamic(dynamicIconImports[name])

  return (
    <LucideIcon
      color={color}
      size={size}
      {...props}
      className={cn(s.root, className, { [s.hover]: hover })}
    />
  )
}

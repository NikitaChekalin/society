import { type FC } from 'react'
import cn from 'classnames'

import s from './Group.module.scss'

export interface GroupProps {
  gap?: number
  children?: React.ReactNode
  className?: string
  fullWidth?: boolean
  align?: 'top' | 'middle' | 'bottom'
  position?: 'start' | 'center' | 'end' | 'apart'
  component?: React.ElementType
}

export const Group: FC<GroupProps> = ({
  gap,
  children,
  className,
  fullWidth,
  align = 'center',
  position = 'start',
  component: Component = 'div',
  ...rest
}) => {
  const rootClassName = cn(
    s.root,
    {
      [s.start]: position === 'start',
      [s.center]: position === 'center',
      [s.end]: position === 'end',
      [s.apart]: position === 'apart',
      [s.top]: align === 'start',
      [s.middle]: align === 'middle',
      [s.bottom]: align === 'end',
      [s.fullWidth]: fullWidth
    },
    className
  )

  return (
    <Component style={{ gap }} className={rootClassName} {...rest}>
      {children}
    </Component>
  )
}

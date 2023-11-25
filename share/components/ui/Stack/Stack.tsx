import cn from 'classnames'

import s from './Stack.module.scss'

export interface StackProps {
  gap?: number
  align?: 'start' | 'center' | 'end'
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between'
  alignSelfStart?: boolean
  children?: React.ReactNode
  className?: string
  component?: React.ElementType
}

export const Stack: React.FC<StackProps> = ({
  gap,
  align,
  justify,
  children,
  className,
  alignSelfStart,
  component: Component = 'div',
  ...rest
}) => {
  const rootClassName = cn(
    s.root,
    {
      [s.flexStart]: justify === 'flex-start',
      [s.flexCenter]: justify === 'center',
      [s.flexEnd]: justify === 'flex-end',
      [s.flexAround]: justify === 'space-around',
      [s.flexBetween]: justify === 'space-between',
      [s.start]: align === 'start',
      [s.center]: align === 'center',
      [s.end]: align === 'end',
      [s.alignSelfStart]: alignSelfStart
    },
    className
  )

  return (
    <Component style={{ gap }} className={rootClassName} {...rest}>
      {children}
    </Component>
  )
}

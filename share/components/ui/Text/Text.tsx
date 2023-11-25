import cn from 'classnames'

import s from './Text.module.scss'

interface TextProps {
  color?: 'white' | 'lightGray'
  size?: 'xsm' | 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
  bold?: boolean
  className?: string
  children: React.ReactNode
  component?: React.ElementType
}

export const Text: React.FC<TextProps> = ({
  children,
  color = 'white',
  size = 'sm',
  bold,
  align,
  component: Component = 'p',
  className
}) => {
  const rootClassName = cn(
    s.root,
    s[size],
    {
      [s.left]: align === 'left',
      [s.right]: align === 'right',
      [s.center]: align === 'center',

      [s.white]: color === 'white',
      [s.lightGray]: color === 'lightGray',

      [s.bold]: bold
    },
    className
  )

  return <Component className={rootClassName}>{children}</Component>
}

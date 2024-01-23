'use client'

import { Icon } from '@share/components/ui'
import cn from 'classnames'
import type dynamicIconImports from 'lucide-react/dynamicIconImports'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import s from './NavigationLink.module.scss'

interface NavigationLinkProps {
  icon: keyof typeof dynamicIconImports
  href: string
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({ icon, href }) => {
  const pathname = usePathname()

  return (
    <Link href={href}>
      <Icon name={icon} className={cn(s.icon, { [s.active]: pathname === href })} />
    </Link>
  )
}

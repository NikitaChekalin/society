import Link from 'next/link'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

import { Icon } from '@share/components/ui'
import { getServerPathname } from '@share/server-actions'

import cn from 'classnames'

import s from './NavigationLink.module.scss'

export interface NavigationLinkProps {
  icon: keyof typeof dynamicIconImports
  href: string
}

export const NavigationLink = ({ icon, href }: NavigationLinkProps) => {
  const pathname = getServerPathname()

  return (
    <Link href={href}>
      <Icon name={icon} className={cn(s.icon, { [s.active]: pathname === href })} />
    </Link>
  )
}

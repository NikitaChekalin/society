import { Icon } from '@share/components/ui'
import { getServerPathname } from '@share/server-actions'
import cn from 'classnames'
import type dynamicIconImports from 'lucide-react/dynamicIconImports'
import Link from 'next/link'

import s from './NavigationLink.module.scss'

interface NavigationLinkProps {
  icon: keyof typeof dynamicIconImports
  href: string
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({ icon, href }) => {
  const pathname = getServerPathname()

  return (
    <Link href={href}>
      <Icon name={icon} className={cn(s.icon, { [s.active]: pathname === href })} />
    </Link>
  )
}

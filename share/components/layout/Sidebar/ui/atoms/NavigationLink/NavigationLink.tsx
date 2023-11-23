import Link from 'next/link'
import s from './NavigationLink.module.scss'

interface NavigationLinkProps {
  icon: React.FC<React.SVGProps<SVGElement>>
  href: string
}

export const NavigationLink = ({ icon, href }: NavigationLinkProps) => {
  const Icon = icon
  return (
    <Link href={href} className={s.root}>
      <Icon width={25} height={25} className={s.icon} color='white' />
    </Link>
  )
}

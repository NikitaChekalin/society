import { SidebarNavigation } from '../../../types'
import { NavigationLink } from '../../atoms'
import s from './Navigation.module.scss'

interface NavigationProps {
  navigation: SidebarNavigation
}

export const Navigation = ({ navigation }: NavigationProps) => {
  return (
    <nav className={s.root}>
      {navigation.map(({ href, icon }) => (
        <NavigationLink key={href} href={href} icon={icon} />
      ))}
    </nav>
  )
}

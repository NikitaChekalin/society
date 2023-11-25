import { SIDEBAR_NAVIGATION } from '@share/constants'

import { NavigationLink } from '../../atoms'

import s from './Navigation.module.scss'

export const Navigation: React.FC = () => {
  return (
    <nav className={s.root}>
      {SIDEBAR_NAVIGATION.map(({ href, icon }: any) => (
        <NavigationLink key={href} href={href} icon={icon} />
      ))}
    </nav>
  )
}

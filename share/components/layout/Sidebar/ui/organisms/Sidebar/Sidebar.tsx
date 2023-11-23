import { Icon } from '@share/components/ui'

import { Navigation } from '../../molecules'
import { Logo } from '../../atoms'

import s from './Sidebar.module.scss'

export const Sidebar = () => {
  return (
    <aside className={s.root}>
      <Logo />
      <Navigation />
      <Icon name='sun-medium' />
    </aside>
  )
}

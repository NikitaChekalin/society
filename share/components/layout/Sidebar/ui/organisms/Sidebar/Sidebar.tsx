import { Icon } from '@share/components/ui'

import { Logo } from '../../atoms'
import { Navigation } from '../../molecules'

import s from './Sidebar.module.scss'

export const Sidebar: React.FC = () => {
  return (
    <aside className={s.root}>
      <Logo />
      <Navigation />
      <Icon name='sun-medium' />
    </aside>
  )
}

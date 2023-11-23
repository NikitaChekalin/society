import Image from 'next/image'
import Logo from '@icons/logo.svg'
import { SunIcon } from 'lucide-react'

import { Navigation } from '../../molecules'
import { SIDEBAR_NAVIGATION } from '../../../const'

import s from './Sidebar.module.scss'

export const Sidebar = () => {
  return (
    <aside className={s.root}>
      <Image src={Logo} width={45} height={45} priority alt='Logotype' />
      <Navigation navigation={SIDEBAR_NAVIGATION} />
      <SunIcon color='white' />
    </aside>
  )
}

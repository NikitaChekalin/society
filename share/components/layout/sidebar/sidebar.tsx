import Image from 'next/image'
import s from './sidebar.module.scss'
import Logo from '@icons/logo.svg'

export const Sidebar = () => {
  return (
    <div className={s.root}>
      <Image src={Logo} width={25} height={25} alt='Logotype' />
    </div>
  )
}

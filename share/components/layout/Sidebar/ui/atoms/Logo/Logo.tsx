import Logotype from '@icons/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

import s from './Logo.module.scss'

export const Logo: React.FC = () => {
  return (
    <Link href={'/'} className={s.root}>
      <Image src={Logotype} width={45} height={45} priority alt='Logotype' />
    </Link>
  )
}

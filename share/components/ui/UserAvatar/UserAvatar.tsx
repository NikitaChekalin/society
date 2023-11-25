import Avatar from '@images/avatar.png'
import cn from 'classnames'
import Image from 'next/image'

import s from './UserAvatar.module.scss'

interface UserAvatarProps {
  avatar?: string
  online: boolean
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ online }) => {
  return (
    <div className={cn(s.root, { [s.online]: online })}>
      <Image src={Avatar} width={60} height={60} alt='Avatar' className={s.avatar} />
    </div>
  )
}

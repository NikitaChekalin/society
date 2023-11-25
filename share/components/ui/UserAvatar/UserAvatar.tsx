import Avatar from '@images/avatar.png'
import cn from 'classnames'
import Image from 'next/image'

import s from './UserAvatar.module.scss'

interface UserAvatarProps {
  avatar?: string
  online?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ online, size = 'md' }) => {
  return (
    <div className={cn(s.root, [s[size]])}>
      <Image src={Avatar} alt='Avatar' width={50} height={50} className={cn(s.avatar, [s[size]])} />
      {online && <span className={cn(s.onlineStatus, [s[size]])} />}
    </div>
  )
}

import { CHATS } from '@share/constants'

import { ChatUser } from '../../molecules'

import s from './ChatList.module.scss'

interface ChatListProps {}

export const ChatList: React.FC<ChatListProps> = () => {
  return (
    <div className={s.root}>
      {CHATS.map((user) => (
        <ChatUser key={user.id} {...user} />
      ))}
    </div>
  )
}

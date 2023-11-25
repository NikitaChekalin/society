import { ChatUser } from '../../molecules'

import s from './ChatList.module.scss'

interface ChatListProps {}

export const ChatList: React.FC<ChatListProps> = () => {
  return (
    <div className={s.root}>
      {[...Array(10)].map((index) => (
        <ChatUser key={index} unreadMessages={5} />
      ))}
    </div>
  )
}

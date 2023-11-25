import { ChatList } from '@features'

import s from './page.module.scss'

const Chats: React.FC = () => {
  return (
    <div className={s.root}>
      <ChatList />
    </div>
  )
}

export default Chats

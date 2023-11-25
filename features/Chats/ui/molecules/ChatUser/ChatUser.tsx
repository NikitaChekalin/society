import { Group, Icon, Stack, Text, UserAvatar } from '@share/components/ui'

import s from './ChatUser.module.scss'

interface ChatUserProps {
  image?: string
  firstName?: string
  lastName?: string
  firstMessage?: string
  unreadMessages?: number
  sended?: boolean
  read?: boolean
  online?: string
}

export const ChatUser: React.FC<ChatUserProps> = ({ unreadMessages, sended, read }) => {
  return (
    <Group align='middle' position='apart' className={s.root}>
      <Group align='middle' gap={16}>
        <UserAvatar online />
        <Stack gap={4} align='start'>
          <Text>Nikita Lighter</Text>
          <Text color='lightGray'>Hello , how are you doing?</Text>
        </Stack>
      </Group>

      <Stack align='end' gap={4}>
        <Text color='lightGray'>9.52</Text>
        {Boolean(unreadMessages) && (
          <Text color='white' size='xsm' className={s.unreadMessages}>
            {unreadMessages}
          </Text>
        )}
        {sended && <Icon name='check' />}
        {read && <Icon name='check-check' />}
      </Stack>
    </Group>
  )
}

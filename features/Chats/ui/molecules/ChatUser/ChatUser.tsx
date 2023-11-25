import { Group, Icon, Stack, Text, UserAvatar } from '@share/components/ui'

import s from './ChatUser.module.scss'

interface ChatUserProps {
  image?: string
  firstName: string
  lastName: string
  firstChatPartnerMessage?: string
  ownLastMessage?: string
  unreadMessages?: number
  sended?: boolean
  read?: boolean
  online?: boolean
  time: string
}

export const ChatUser: React.FC<ChatUserProps> = ({
  firstName,
  lastName,
  firstChatPartnerMessage,
  ownLastMessage,
  unreadMessages,
  sended,
  online,
  read,
  time
}) => {
  return (
    <Group align='middle' position='apart' className={s.root}>
      <Group align='middle' gap={16}>
        <UserAvatar size='sm' online={online} />
        <Stack gap={4} align='start'>
          <Text bold size='xsm'>
            {firstName} {lastName}
          </Text>
          {firstChatPartnerMessage && (
            <Text size='xsm' color='lightGray'>
              {firstChatPartnerMessage}
            </Text>
          )}
          {ownLastMessage && (
            <Text size='xsm'>
              You:{' '}
              <Text size='xsm' color='lightGray' component={'span'}>
                {ownLastMessage}
              </Text>
            </Text>
          )}
        </Stack>
      </Group>

      <Stack align='end' alignSelfStart gap={8}>
        <Group align='middle' gap={8}>
          {sended && <Icon name='check' color='lightGreen' size={15} />}
          {read && <Icon name='check-check' color='lightGreen' size={15} />}
          <Text color='lightGray' size='xsm'>
            {time}
          </Text>
        </Group>
        {Boolean(unreadMessages) && (
          <Text color='white' size='xsm' className={s.unreadMessages}>
            {unreadMessages}
          </Text>
        )}
      </Stack>
    </Group>
  )
}

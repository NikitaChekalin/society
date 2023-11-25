import { Group, Icon, Stack, Text, UserAvatar } from '@share/components/ui'

import s from './CurrentUser.module.scss'

interface CurrentUserProps {
  image?: string
  firstName?: string
  lastName?: string
  status?: string
}

export const CurrentUser: React.FC<CurrentUserProps> = () => {
  return (
    <Group align='middle' position='apart' className={s.root}>
      <Group align='middle' gap={16}>
        <UserAvatar online />
        <Stack gap={4} align='start'>
          <Text>Nikita Lighter</Text>
          <Text color='lightGray'>React JS developer</Text>
        </Stack>
      </Group>

      <Icon name='more-horizontal' />
    </Group>
  )
}

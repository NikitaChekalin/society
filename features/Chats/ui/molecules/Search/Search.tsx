import { Group, Icon } from '@share/components/ui'

import { SearchInput } from '../../atoms'

import s from './Search.module.scss'

interface SearchProps {
  value?: string
}

export const Search: React.FC<SearchProps> = () => {
  return (
    <Group align='middle' position='apart' className={s.root}>
      <Group align='middle' gap={8} className={s.search}>
        <Icon name='search' />
        <SearchInput />
      </Group>
      <Icon name='plus' />
    </Group>
  )
}

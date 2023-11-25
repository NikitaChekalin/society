import { CurrentUser, Search } from '../molecules'

import s from './Main.module.scss'

export const Main: React.FC = () => {
  return (
    <div className={s.root}>
      <CurrentUser />
      <Search />
    </div>
  )
}

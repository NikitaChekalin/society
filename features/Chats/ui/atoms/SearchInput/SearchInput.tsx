import s from './SearchInput.module.scss'

interface SearchInputProps {}

export const SearchInput: React.FC<SearchInputProps> = () => {
  return <input placeholder='People,groups and messages' className={s.root} />
}

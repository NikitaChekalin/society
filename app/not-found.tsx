import NotFoundIcon from '@icons/not-found.svg'
import { Stack } from '@share/components/ui'
import Image from 'next/image'

const NotFound: React.FC = () => {
  return (
    <Stack align='center' justify='center' style={{ backgroundColor: 'white' }}>
      <Image src={NotFoundIcon} alt='Not found page' width={500} height={500} />
    </Stack>
  )
}

export default NotFound

import Image from 'next/image'
import NotFoundIcon from '@icons/not-found.svg'

const NotFound = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <Image src={NotFoundIcon} alt='Not found page' width={500} height={500} />
    </div>
  )
}

export default NotFound

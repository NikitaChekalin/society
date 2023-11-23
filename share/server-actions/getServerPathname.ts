'use server'
import { headers } from 'next/headers'

export const getServerPathname = () => {
  const headersList = headers()
  const headerUrl = headersList.get('referer')
  const pathname = '/' + headerUrl?.split('/').slice(3).join('/')

  return pathname
}

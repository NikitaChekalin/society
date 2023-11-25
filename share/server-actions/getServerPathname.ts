'use server'

import { headers } from 'next/headers'

type GetServerPathname = () => string

export const getServerPathname: GetServerPathname = () => {
  const headersList = headers()
  const headerUrl = headersList.get('referer')
  const pathname = '/' + headerUrl?.split('/').slice(3).join('/')

  return pathname
}

import { Sidebar } from '@share/components/layout'
import type { Metadata } from 'next'
import '@styles/document.scss'

export const metadata: Metadata = {
  title: 'Society - social media for everyone',
  description: 'Society - discover new friends and communicate with them',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Sidebar />
      <body>{children}</body>
    </html>
  )
}

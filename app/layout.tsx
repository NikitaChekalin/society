import type { Metadata } from 'next'
import { Sidebar } from '@share/components/layout'
import '@styles/document.scss'
import s from './layout.module.scss'

export const metadata: Metadata = {
  title: 'Society - social media for everyone',
  description: 'Society - discover new friends and communicate with them',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className={s.layout}>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}

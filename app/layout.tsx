import { Sidebar } from '@share/components/layout'
import type { Metadata } from 'next'

import '@styles/document.scss'
import s from './layout.module.scss'

export const metadata: Metadata = {
  title: 'Society',
  description: 'Society - discover new friends and communicate with them'
}
interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
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
export default RootLayout

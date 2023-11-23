import { UserCircle, MessageCircleIcon, Settings } from 'lucide-react'
import { SidebarNavigation } from '../types'

export const SIDEBAR_NAVIGATION: SidebarNavigation = [
  {
    href: '/profile',
    icon: UserCircle,
  },
  {
    href: '/chats',
    icon: MessageCircleIcon,
  },
  {
    href: '/settings',
    icon: Settings,
  },
]

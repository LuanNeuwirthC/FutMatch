'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, Calendar, MessageSquare, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', icon: Home, label: 'Início' },
  { href: '/quadras', icon: Search, label: 'Quadras' },
  { href: '/meus-jogos', icon: Calendar, label: 'Jogos' },
  { href: '/mensagens', icon: MessageSquare, label: 'Chat' },
  { href: '/perfil', icon: User, label: 'Perfil' },
]

// Navegação fixa no rodapé para mobile
export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-border md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors',
                isActive ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <item.icon className={cn('w-5 h-5', isActive && 'text-primary')} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

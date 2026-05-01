'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Bell, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  
  // Verifica se está na home para mostrar "Mensagens" ou "Notificações"
  const isHome = pathname === '/'
  
  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
      {/* Logo oficial do Futmatch */}
      <Link href="/" className="flex items-center gap-2">
        <div className="relative w-12 h-12 md:w-14 md:h-14">
          <Image
            src="/images/logo.png"
            alt="Futmatch Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="text-xl md:text-2xl font-bold text-white">FUTMATCH</span>
      </Link>
      
      {/* Navegação Desktop */}
      <nav className="hidden md:flex items-center gap-8">
        <Link 
          href="/" 
          className="text-white/90 hover:text-white transition-colors"
        >
          Início
        </Link>
        <Link 
          href="/meus-jogos" 
          className="text-white/90 hover:text-white transition-colors"
        >
          Meus Jogos
        </Link>
        {isHome ? (
          <Link 
            href="/mensagens" 
            className="text-white/90 hover:text-white transition-colors"
          >
            Mensagens
          </Link>
        ) : (
          <button className="text-white/90 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>
        )}
        <button className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white/90 hover:border-white/50 transition-colors">
          <User className="w-5 h-5" />
        </button>
      </nav>
      
      {/* Navegação Mobile */}
      <div className="flex md:hidden items-center gap-4">
        <button className="text-white/90">
          <Bell className="w-5 h-5" />
        </button>
        <button className="w-9 h-9 rounded-full border-2 border-white/30 flex items-center justify-center text-white/90">
          <User className="w-4 h-4" />
        </button>
      </div>
    </header>
  )
}



'use client'

import Link from 'next/link'
import { Bell, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  
  // Verifica se está na home para mostrar "Mensagens" ou "Notificações"
  const isHome = pathname === '/'
  
  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="relative w-12 h-12 md:w-14 md:h-14">
          <FutmatchLogo />
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

// Logo SVG do Futmatch
function FutmatchLogo() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Escudo */}
      <path
        d="M50 5 L90 25 L90 60 Q90 85 50 95 Q10 85 10 60 L10 25 Z"
        fill="#1a5f3c"
        stroke="#2d8a5a"
        strokeWidth="2"
      />
      {/* Listras */}
      <path d="M30 25 L30 75" stroke="#fff" strokeWidth="6" opacity="0.9" />
      <path d="M50 20 L50 80" stroke="#fff" strokeWidth="6" opacity="0.9" />
      <path d="M70 25 L70 75" stroke="#fff" strokeWidth="6" opacity="0.9" />
      {/* Jogadores */}
      <g fill="#fff" opacity="0.95">
        {/* Jogador esquerdo */}
        <circle cx="35" cy="35" r="5" />
        <path d="M35 42 L35 55 M30 48 L40 48 M35 55 L30 68 M35 55 L40 68" 
          stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Jogador direito */}
        <circle cx="65" cy="35" r="5" />
        <path d="M65 42 L65 55 M60 48 L70 48 M65 55 L60 68 M65 55 L70 68" 
          stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </g>
      {/* Texto FUTMATCH */}
      <text x="50" y="88" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">
        FUTMATCH
      </text>
    </svg>
  )
}

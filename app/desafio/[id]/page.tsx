'use client'

import { MapPin, Clock, Trophy, Users, X } from 'lucide-react'
import { Header } from '@/components/header'
import { StadiumBackground } from '@/components/stadium-background'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Página de desafio de time
export default function ChallengePage() {
  return (
    <StadiumBackground>
      <Header />
      
      <main className="px-4 md:px-8 pb-8">
        {/* Layout lado a lado em desktop */}
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center max-w-5xl mx-auto py-8">
          
          {/* Lado esquerdo - Time a ser desafiado */}
          <div className="flex-1 flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Desafiar Time A
            </h1>
            
            {/* Logo grande do time */}
            <div className="w-48 h-48 md:w-64 md:h-64 mb-6">
              <GenericLogo />
            </div>
            
            {/* Badge do nível */}
            <Badge className="bg-white/10 border border-white/20 text-white px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Semi-Pro
            </Badge>
          </div>

          {/* Lado direito - Card de detalhes */}
          <div className="w-full lg:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header do card */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-primary" />
                </div>
                <h2 className="font-bold text-lg text-card-foreground">Detalhes do Jogo</h2>
              </div>
              <button className="text-muted-foreground hover:text-card-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo */}
            <div className="p-4 space-y-4">
              {/* Local */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-card-foreground">Quadra Modelo</p>
                  <p className="text-sm text-muted-foreground">Rua Exemplo, 123</p>
                  <p className="text-sm text-muted-foreground">Região Central</p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <p className="font-medium text-card-foreground">Hoje, às 20:00</p>
              </div>

              {/* Card do adversário */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                    <Users className="w-3 h-3 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">Informações do Adversário</h3>
                </div>

                {/* Info do time */}
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <GenericLogoSmall />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-card-foreground">Time A</span>
                      <Badge variant="outline" className="text-xs bg-gray-200 text-gray-700">
                        Semi-Pro
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 mt-1 text-sm">
                      <span className="flex items-center gap-1">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <strong>3</strong> Vitórias
                      </span>
                      <span className="text-muted-foreground">
                        <strong>1</strong> Vitórias Seguidas
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Nível Semi-Pro</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Saldo <strong className="text-card-foreground">3</strong> V 
                    · <strong className="text-card-foreground">1</strong> E 
                    · <strong className="text-card-foreground">2</strong> D
                  </div>
                </div>

                {/* Jogadores */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Avatar key={i} className="w-8 h-8 border-2 border-white">
                        <AvatarImage src={`https://i.pravatar.cc/32?img=${i + 10}`} />
                        <AvatarFallback>J{i}</AvatarFallback>
                      </Avatar>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                      <Users className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  <strong className="text-card-foreground">9/10</strong> jogadores disponíveis
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 rounded-xl text-lg">
                Confirmar Desafio
              </Button>
            </div>
          </div>
        </div>
      </main>
    </StadiumBackground>
  )
}

// Logo grande genérica
function GenericLogo() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.3"/>
        </filter>
      </defs>
      <rect x="20" y="20" width="160" height="160" rx="32" fill="#1a5f3c" filter="url(#shadow)" />
      <circle cx="100" cy="90" r="40" fill="#ffffff" opacity="0.95" />
      <path d="M100 60 L120 100 L80 100 Z" fill="#1a5f3c" />
      <path d="M70 90 L90 110 L70 130" fill="none" stroke="#1a5f3c" strokeWidth="4" />
      <path d="M130 90 L110 110 L130 130" fill="none" stroke="#1a5f3c" strokeWidth="4" />
      <text x="100" y="160" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold" fontFamily="Arial Black">
        TIME
      </text>
    </svg>
  )
}

// Logo pequena genérica
function GenericLogoSmall() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <rect width="80" height="80" fill="#1a5f3c" rx="16" />
      <circle cx="40" cy="30" r="18" fill="#ffffff" opacity="0.95" />
      <path d="M40 20 L50 38 L30 38 Z" fill="#1a5f3c" />
      <text x="40" y="62" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">
        TA
      </text>
    </svg>
  )
}

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
              Desafiar United Team
            </h1>
            
            {/* Logo grande do time */}
            <div className="w-48 h-48 md:w-64 md:h-64 mb-6">
              <UnitedTeamLogo />
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
                  <p className="font-semibold text-card-foreground">Arena Zona Sul</p>
                  <p className="text-sm text-muted-foreground">Rua Domingos de Moraais, 1234</p>
                  <p className="text-sm text-muted-foreground">Vila Mariana, São Paulo - SP</p>
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
                    <UnitedTeamLogoSmall />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-card-foreground">United Team</span>
                      <Badge variant="outline" className="text-xs bg-gray-200 text-gray-700">
                        Semi-Pro
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 mt-1 text-sm">
                      <span className="flex items-center gap-1">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <strong>17</strong> Vitórias
                      </span>
                      <span className="text-muted-foreground">
                        <strong>4</strong> Vitórias Seguidas
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
                    Saldo <strong className="text-card-foreground">17</strong> V 
                    · <strong className="text-card-foreground">6</strong> E 
                    · <strong className="text-card-foreground">9</strong> D
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

// Logo grande do United Team
function UnitedTeamLogo() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
      {/* Sombra */}
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      {/* Escudo principal */}
      <path
        d="M100 15 L170 45 L170 115 Q170 165 100 185 Q30 165 30 115 L30 45 Z"
        fill="#1a1a2e"
        stroke="#4a4a5e"
        strokeWidth="3"
        filter="url(#shadow)"
      />
      
      {/* Faixa vermelha */}
      <path
        d="M100 25 L160 50 L160 110 Q160 155 100 175 Q40 155 40 110 L40 50 Z"
        fill="#8B0000"
        stroke="#c41e3a"
        strokeWidth="2"
      />
      
      {/* Bola de futebol */}
      <circle cx="100" cy="80" r="35" fill="white" stroke="#ddd" strokeWidth="2" />
      <path d="M100 55 L85 90 L115 90 Z" fill="#1a1a2e" />
      <path d="M70 75 L85 90 L70 105" fill="none" stroke="#ddd" strokeWidth="2" />
      <path d="M130 75 L115 90 L130 105" fill="none" stroke="#ddd" strokeWidth="2" />
      
      {/* Detalhes decorativos */}
      <path d="M60 45 L60 130" stroke="#c41e3a" strokeWidth="3" opacity="0.5" />
      <path d="M140 45 L140 130" stroke="#c41e3a" strokeWidth="3" opacity="0.5" />
      
      {/* Texto */}
      <text x="100" y="145" textAnchor="middle" fontSize="22" fill="white" fontWeight="bold" fontFamily="Arial Black">
        UNITED
      </text>
      <text x="100" y="165" textAnchor="middle" fontSize="14" fill="#c0c0c0" fontWeight="bold">
        TEAM
      </text>
    </svg>
  )
}

// Logo pequena do United Team
function UnitedTeamLogoSmall() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <rect width="80" height="80" fill="#1a1a2e" rx="8" />
      <path d="M40 10 L65 25 L65 55 L40 70 L15 55 L15 25 Z" fill="#8B0000" stroke="#c0c0c0" strokeWidth="2" />
      <circle cx="40" cy="35" r="12" fill="white" />
      <path d="M40 28 L35 40 L45 40 Z" fill="#1a1a2e" />
      <text x="40" y="60" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">UNITED</text>
      <text x="40" y="68" textAnchor="middle" fontSize="6" fill="#c0c0c0">TEAM</text>
    </svg>
  )
}

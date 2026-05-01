'use client'

import { X, MapPin, Clock, Trophy, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface ChallengeModalProps {
  isOpen: boolean
  onClose: () => void
  team: {
    name: string
    level: string
    wins: number
    winStreak: number
    balance: { wins: number; draws: number; losses: number }
    players: number
    maxPlayers: number
  }
  match: {
    arena: string
    address: string
    time: string
  }
}

export function ChallengeModal({ isOpen, onClose, team, match }: ChallengeModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Trophy className="w-4 h-4 text-primary" />
            </div>
            <h2 className="font-bold text-lg text-card-foreground">Detalhes do Jogo</h2>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-card-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-4 space-y-4">
          {/* Local */}
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="font-semibold text-card-foreground">{match.arena}</p>
              <p className="text-sm text-muted-foreground">{match.address}</p>
            </div>
          </div>

          {/* Horário */}
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary" />
            <p className="font-medium text-card-foreground">{match.time}</p>
          </div>

          {/* Informações do adversário */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                <Users className="w-3 h-3 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground">Informações do Adversário</h3>
            </div>

            {/* Time info */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200">
                <UnitedTeamLogo />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-card-foreground">{team.name}</span>
                  <Badge variant="outline" className="text-xs bg-gray-200 text-gray-700">
                    {team.level}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 mt-1 text-sm">
                  <span className="flex items-center gap-1">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <strong>{team.wins}</strong> Vitórias
                  </span>
                  <span className="text-muted-foreground">
                    <strong>{team.winStreak}</strong> Vitórias Seguidas
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Nível {team.level}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Saldo <strong className="text-card-foreground">{team.balance.wins}</strong> V 
                · <strong className="text-card-foreground">{team.balance.draws}</strong> E 
                · <strong className="text-card-foreground">{team.balance.losses}</strong> D
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
              <strong className="text-card-foreground">{team.players}/{team.maxPlayers}</strong> jogadores disponíveis
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
  )
}

// Logo do United Team
function UnitedTeamLogo() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <rect width="80" height="80" fill="#1a1a2e" />
      <path d="M40 10 L65 25 L65 55 L40 70 L15 55 L15 25 Z" fill="#8B0000" stroke="#c0c0c0" strokeWidth="2" />
      <circle cx="40" cy="35" r="12" fill="white" />
      <path d="M40 28 L35 40 L45 40 Z" fill="#1a1a2e" />
      <text x="40" y="60" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">UNITED</text>
      <text x="40" y="68" textAnchor="middle" fontSize="6" fill="#c0c0c0">TEAM</text>
    </svg>
  )
}

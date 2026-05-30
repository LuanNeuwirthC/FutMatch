'use client'

import { Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface TeamCardProps {
  id: string
  name: string
  level: 'Amador' | 'Semi-Pro' | 'Profissional'
  players: number
  maxPlayers: number
  logo: string
  onChallenge: (teamId: string) => void
}

// Card de time aguardando desafio
export function TeamCard({ id, name, level, players, maxPlayers, logo, onChallenge }: TeamCardProps) {
  const levelColors = {
    'Amador': 'bg-primary/20 text-primary border-primary/30',
    'Semi-Pro': 'bg-gray-200 text-gray-700 border-gray-300',
    'Profissional': 'bg-yellow-100 text-yellow-700 border-yellow-300'
  }
  
  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg min-w-[160px] md:min-w-[180px]">
      {/* Logo e informações */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
          {/* Logo do time */}
          <TeamLogo name={name} />
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-card-foreground text-sm md:text-base">{name}</h3>
          <Badge variant="outline" className={`text-xs mt-1 ${levelColors[level]}`}>
            {level}
          </Badge>
        </div>
      </div>
      
      {/* Quantidade de jogadores */}
      <div className="flex items-center gap-1.5 text-muted-foreground text-xs md:text-sm mt-3">
        <Users className="w-4 h-4" />
        <span>{players}/{maxPlayers} jogadores</span>
      </div>
      
      <Button 
        onClick={() => onChallenge(id)}
        className="w-full mt-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl"
      >
        Desafiar
      </Button>
    </div>
  )
}

// Logo placeholder baseado no nome do time
function TeamLogo({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 3)

  return (
    <div className="w-full h-full flex items-center justify-center bg-primary text-white text-sm font-bold rounded-lg">
      {initials}
    </div>
  )
}

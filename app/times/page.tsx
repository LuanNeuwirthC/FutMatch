'use client'

import { useState } from 'react'
import { Search, Users, Filter, Trophy } from 'lucide-react'
import { Header } from '@/components/header'
import { StadiumBackground } from '@/components/stadium-background'
import { ChallengeModal } from '@/components/challenge-modal'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Dados mockados dos times
const allTeams = [
  { id: '1', name: 'Fúria FC', level: 'Amador' as const, players: 8, maxPlayers: 10, wins: 12, winStreak: 2 },
  { id: '2', name: 'United Team', level: 'Semi-Pro' as const, players: 9, maxPlayers: 10, wins: 17, winStreak: 4 },
  { id: '3', name: 'Galácticos', level: 'Amador' as const, players: 7, maxPlayers: 10, wins: 8, winStreak: 1 },
  { id: '4', name: 'Vila FC', level: 'Profissional' as const, players: 10, maxPlayers: 10, wins: 25, winStreak: 6 },
  { id: '5', name: 'Thunder FC', level: 'Semi-Pro' as const, players: 9, maxPlayers: 10, wins: 15, winStreak: 3 },
  { id: '6', name: 'Atlético Bairro', level: 'Amador' as const, players: 8, maxPlayers: 10, wins: 5, winStreak: 0 },
]

export default function TimesPage() {
  const [showChallengeModal, setShowChallengeModal] = useState(false)
  const [selectedTeam, setSelectedTeam] = useState<typeof allTeams[0] | null>(null)

  const handleChallenge = (team: typeof allTeams[0]) => {
    setSelectedTeam(team)
    setShowChallengeModal(true)
  }

  // Cores por nível
  const levelColors = {
    'Amador': 'bg-primary/20 text-primary border-primary/30',
    'Semi-Pro': 'bg-gray-200 text-gray-700 border-gray-300',
    'Profissional': 'bg-yellow-100 text-yellow-700 border-yellow-300'
  }

  return (
    <StadiumBackground>
      <Header />
      
      <main className="px-4 md:px-8 pb-8 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-2">
          Times Aguardando Desafio
          <span>🏆⚡</span>
        </h1>
        
        {/* Barra de busca */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Buscar por nome do time..." 
              className="pl-10 bg-white rounded-xl h-12"
            />
          </div>
          <Button variant="outline" className="bg-white rounded-xl h-12 px-4">
            <Filter className="w-5 h-5" />
          </Button>
        </div>

        {/* Lista de times */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {allTeams.map((team) => (
            <div key={team.id} className="bg-white rounded-2xl p-5 shadow-lg">
              {/* Header do card */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100">
                    <TeamLogo name={team.name} />
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground">{team.name}</h3>
                    <Badge variant="outline" className={`text-xs mt-1 ${levelColors[team.level]}`}>
                      {team.level}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span className="text-card-foreground"><strong>{team.wins}</strong> Vitórias</span>
                </div>
                <div className="text-muted-foreground">
                  <strong>{team.winStreak}</strong> Sequência
                </div>
              </div>

              {/* Jogadores */}
              <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
                <Users className="w-4 h-4" />
                <span>{team.players}/{team.maxPlayers} jogadores</span>
              </div>

              <Button 
                onClick={() => handleChallenge(team)}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl"
              >
                Desafiar
              </Button>
            </div>
          ))}
        </div>
      </main>

      {/* Modal de Desafio */}
      {selectedTeam && (
        <ChallengeModal
          isOpen={showChallengeModal}
          onClose={() => setShowChallengeModal(false)}
          team={{
            name: selectedTeam.name,
            level: selectedTeam.level,
            wins: selectedTeam.wins,
            winStreak: selectedTeam.winStreak,
            balance: { wins: selectedTeam.wins, draws: 6, losses: 9 },
            players: selectedTeam.players,
            maxPlayers: selectedTeam.maxPlayers,
          }}
          match={{
            arena: 'Arena Zona Sul',
            address: 'Rua Domingos de Moraais, 1234, Vila Mariana, São Paulo - SP',
            time: 'Hoje, às 20:00',
          }}
        />
      )}
    </StadiumBackground>
  )
}

// Logo placeholder do time
function TeamLogo({ name }: { name: string }) {
  const colors: Record<string, string> = {
    'Fúria FC': '#8B0000',
    'United Team': '#1a1a2e',
    'Galácticos': '#1a3a5c',
    'Vila FC': '#2d1a4a',
    'Thunder FC': '#1a4a3a',
    'Atlético Bairro': '#4a3a1a'
  }
  
  const bgColor = colors[name] || '#1a5f3c'
  
  return (
    <svg viewBox="0 0 60 60" className="w-full h-full">
      <rect width="60" height="60" fill={bgColor} rx="8" />
      <circle cx="30" cy="25" r="10" fill="white" opacity="0.9" />
      <path d="M30 20 L33 28 L27 28 Z" fill={bgColor} />
      <text x="30" y="50" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">
        {name.split(' ')[0].slice(0, 7).toUpperCase()}
      </text>
    </svg>
  )
}

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
  { id: '1', name: 'Time A', level: 'Amador' as const, players: 6, maxPlayers: 10, wins: 3, winStreak: 1 },
  { id: '2', name: 'Time B', level: 'Semi-Pro' as const, players: 8, maxPlayers: 10, wins: 5, winStreak: 2 },
  { id: '3', name: 'Time C', level: 'Profissional' as const, players: 9, maxPlayers: 10, wins: 7, winStreak: 3 },
  { id: '4', name: 'Time D', level: 'Amador' as const, players: 5, maxPlayers: 10, wins: 2, winStreak: 0 },
  { id: '5', name: 'Time E', level: 'Semi-Pro' as const, players: 7, maxPlayers: 10, wins: 4, winStreak: 1 },
  { id: '6', name: 'Time F', level: 'Amador' as const, players: 6, maxPlayers: 10, wins: 1, winStreak: 0 },
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
            arena: 'Quadra Modelo',
            address: 'Rua Exemplo, 123',
            time: 'Hoje, às 20:00',
          }}
        />
      )}
    </StadiumBackground>
  )
}

// Logo placeholder do time
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

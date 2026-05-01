'use client'

import { useState } from 'react'
import { ChevronRight, Users } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { StadiumBackground } from '@/components/stadium-background'
import { CourtCard } from '@/components/court-card'
import { TeamCard } from '@/components/team-card'
import { ChallengeModal } from '@/components/challenge-modal'
import { Button } from '@/components/ui/button'

// Dados mockados das quadras
const courts = [
  { id: '1', name: 'Arena Central', location: 'São Paulo - SP', rating: 4.9, image: 'https://images.unsplash.com/photo-1624880357913-a8539238245b?w=400&h=300&fit=crop' },
  { id: '2', name: 'Grama Premium', location: 'Rio de Janeiro - RJ', rating: 4.8, image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=400&h=300&fit=crop' },
  { id: '3', name: 'Soccer Zone', location: 'Belo Horizonte - MG', rating: 4.7, image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=300&fit=crop' },
  { id: '4', name: 'Arena Praiana', location: 'Salvador - BA', rating: 4.9, image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop' },
]

// Dados mockados dos times
const teams = [
  { id: '1', name: 'Fúria FC', level: 'Amador' as const, players: 8, maxPlayers: 10, logo: '' },
  { id: '2', name: 'United Team', level: 'Semi-Pro' as const, players: 9, maxPlayers: 10, logo: '' },
  { id: '3', name: 'Galácticos', level: 'Amador' as const, players: 7, maxPlayers: 10, logo: '' },
  { id: '4', name: 'Vila FC', level: 'Profissional' as const, players: 10, maxPlayers: 10, logo: '' },
]

export default function HomePage() {
  const [showChallengeModal, setShowChallengeModal] = useState(false)
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null)

  const handleChallenge = (teamId: string) => {
    setSelectedTeam(teamId)
    setShowChallengeModal(true)
  }

  const team = teams.find(t => t.id === selectedTeam)

  return (
    <StadiumBackground>
      <Header />
      
      <main className="px-4 md:px-8 pb-8">
        {/* Hero */}
        <section className="py-6 md:py-10">
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center text-balance leading-tight">
            Agende agora seu horário, localize um adversário e vai pra cima!
          </h1>
        </section>

        {/* Quadras Disponíveis */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-lg md:text-xl font-bold text-white">Quadras Disponíveis</h2>
            </div>
            <Link href="/quadras">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full text-sm">
                Ver Todas
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          
          {/* Carrossel de quadras */}
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {courts.map((court) => (
              <div key={court.id} className="snap-start">
                <CourtCard {...court} />
              </div>
            ))}
          </div>
        </section>

        {/* Times Aguardando Desafio */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-lg md:text-xl font-bold text-white flex items-center gap-1">
                Times Aguardando Desafio
                <span>🏆⚡</span>
              </h2>
            </div>
            <Link href="/times">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full text-sm">
                Ver Todos
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          
          {/* Grid de times */}
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {teams.map((team) => (
              <div key={team.id} className="snap-start">
                <TeamCard {...team} onChallenge={handleChallenge} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal de Desafio */}
      {team && (
        <ChallengeModal
          isOpen={showChallengeModal}
          onClose={() => setShowChallengeModal(false)}
          team={{
            name: team.name,
            level: team.level,
            wins: 17,
            winStreak: 4,
            balance: { wins: 17, draws: 6, losses: 9 },
            players: team.players,
            maxPlayers: team.maxPlayers,
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

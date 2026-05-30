'use client'

import { useState } from 'react'
import { ArrowRight, CalendarDays, Users } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { CourtCard } from '@/components/court-card'
import { TeamCard } from '@/components/team-card'
import { ChallengeModal } from '@/components/challenge-modal'

// Dados mockados das quadras (MANTIDOS)
const courts = [
  { id: '1', name: 'Arena Central', location: 'São Paulo - SP', rating: 4.9, image: 'https://images.unsplash.com/photo-1624880357913-a8539238245b?w=400&h=300&fit=crop' },
  { id: '2', name: 'Grama Premium', location: 'Rio de Janeiro - RJ', rating: 4.8, image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=400&h=300&fit=crop' },
  { id: '3', name: 'Soccer Zone', location: 'Belo Horizonte - MG', rating: 4.7, image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=300&fit=crop' },
  { id: '4', name: 'Arena Praiana', location: 'Salvador - BA', rating: 4.9, image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop' },
]

// Dados mockados dos times (MANTIDOS)
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
    // Removi o StadiumBackground e coloquei um fundo claro para destacar os cards brancos
    <div className="min-h-screen bg-gray-50 pb-12">
      
      {/* 🟢 HEADER + HERO COM FUNDO VERDE ARREDONDADO */}
      <div className="bg-gradient-to-b from-[#0a2a16] to-[#144d29] rounded-b-[2.5rem] relative overflow-hidden pb-16 pt-2 shadow-lg">
        
        {/* SEU HEADER ORIGINAL COM A LOGO ENTRA AQUI! */}
        <div className="relative z-20">
          <Header />
        </div>

        {/* Hero Text */}
        <div className="max-w-4xl mx-auto text-center mt-12 mb-4 relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Agende agora seu horário, localize um adversário e vai pra cima!
          </h1>
        </div>

        {/* Elemento decorativo de fundo (opcional, dá um charme) */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-12 space-y-12">
        
        {/* Quadras Disponíveis */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2 text-gray-800">
              <CalendarDays className="w-6 h-6 text-green-700" />
              Quadras Disponíveis
            </h2>
            <Link href="/quadras" className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 transition shadow-sm">
              Ver Todas <ArrowRight className="w-4 h-4 text-green-600" />
            </Link>
          </div>
          
          {/* Carrossel de quadras mantendo os SEUS componentes */}
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-hide">
            {courts.map((court) => (
              <div key={court.id} className="snap-start min-w-[280px] md:min-w-[300px]">
                <CourtCard {...court} />
              </div>
            ))}
          </div>
        </section>

        {/* Times Aguardando Desafio */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2 text-gray-800">
              <Users className="w-6 h-6 text-green-700" />
              Times Aguardando Desafio 🏆⚡
            </h2>
            <Link href="/times" className="flex items-center gap-2 text-sm font-medium text-white bg-slate-800 px-4 py-2 rounded-full hover:bg-slate-900 transition shadow-sm">
              Ver Todos <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
          
          {/* Carrossel de times mantendo os SEUS componentes */}
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-hide">
            {teams.map((team) => (
              <div key={team.id} className="snap-start min-w-[280px] md:min-w-[300px]">
                <TeamCard {...team} onChallenge={handleChallenge} />
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Seu Modal de Desafio (MANTIDO) */}
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
    </div>
  )
}
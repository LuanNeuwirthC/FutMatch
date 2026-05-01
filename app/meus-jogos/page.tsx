'use client'

import { Calendar, MapPin, Clock, Users, Trophy } from 'lucide-react'
import { Header } from '@/components/header'
import { StadiumBackground } from '@/components/stadium-background'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// Dados mockados dos jogos
const upcomingGames = [
  {
    id: '1',
    type: 'challenge',
    opponent: 'United Team',
    arena: 'Arena Zona Sul',
    address: 'Vila Mariana, São Paulo - SP',
    date: 'Hoje',
    time: '20:00',
    level: 'Semi-Pro',
  },
  {
    id: '2',
    type: 'booking',
    arena: 'Arena Street Fut7',
    address: 'Cidade Industrial de Curitiba, Curitiba - PR',
    date: 'Sexta-feira, 20/02',
    time: '19:00',
  },
]

const pastGames = [
  {
    id: '3',
    opponent: 'Fúria FC',
    result: 'Vitória',
    score: '3 x 1',
    date: '15/02/2026',
  },
  {
    id: '4',
    opponent: 'Galácticos',
    result: 'Derrota',
    score: '2 x 4',
    date: '10/02/2026',
  },
]

export default function MeusJogosPage() {
  return (
    <StadiumBackground>
      <Header />
      
      <main className="px-4 md:px-8 pb-8 max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">Meus Jogos</h1>
        
        {/* Próximos Jogos */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Próximos Jogos
          </h2>
          
          <div className="space-y-4">
            {upcomingGames.map((game) => (
              <div key={game.id} className="bg-white rounded-2xl p-4 shadow-lg">
                {game.type === 'challenge' ? (
                  // Card de desafio
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-card-foreground">vs {game.opponent}</h3>
                          <Badge variant="outline" className="text-xs">
                            {game.level}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{game.arena} - {game.address}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <Clock className="w-4 h-4" />
                          <span>{game.date} às {game.time}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive hover:text-white">
                      Cancelar
                    </Button>
                  </div>
                ) : (
                  // Card de reserva
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-card-foreground mb-1">{game.arena}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{game.address}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <Clock className="w-4 h-4" />
                          <span>{game.date} às {game.time}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive hover:text-white">
                      Cancelar
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Histórico */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            Histórico de Jogos
          </h2>
          
          <div className="space-y-3">
            {pastGames.map((game) => (
              <div key={game.id} className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    game.result === 'Vitória' ? 'bg-primary/20' : 'bg-destructive/20'
                  }`}>
                    <Trophy className={`w-5 h-5 ${
                      game.result === 'Vitória' ? 'text-primary' : 'text-destructive'
                    }`} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">vs {game.opponent}</p>
                    <p className="text-sm text-white/70">{game.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${
                    game.result === 'Vitória' ? 'text-primary' : 'text-destructive'
                  }`}>
                    {game.result}
                  </p>
                  <p className="text-white font-semibold">{game.score}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </StadiumBackground>
  )
}

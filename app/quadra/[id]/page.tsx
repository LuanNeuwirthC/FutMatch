'use client'

import { useState } from 'react'
import { MapPin, Star, Clock, Calendar, ChevronRight, Check } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { StadiumBackground } from '@/components/stadium-background'
import { TimeSlot } from '@/components/time-slot'
import { BookingModal } from '@/components/booking-modal'
import { Badge } from '@/components/ui/badge'

// Dados mockados dos horários por dia
const scheduleData = [
  {
    date: 'quinta-feira, 19/02/2026',
    label: 'Amanhã',
    slots: [
      { time: '09:00', isAvailable: true },
      { time: '09:00 às 10:00', isAvailable: false, isBooked: true, bookedInfo: { teamName: 'Futmatch', timeRange: '19:00 às 20:00' } },
      { time: '10:00', isAvailable: true },
      { time: '11:00', isAvailable: true },
      { time: '12:00', isAvailable: true },
      { time: '19:00', isAvailable: true },
    ]
  },
  {
    date: 'sábado, 21/02/2026',
    label: 'Amanhã',
    slots: [
      { time: '09:00', isAvailable: true },
      { time: '10:00', isAvailable: true },
      { time: '14:00', isAvailable: true },
      { time: '16:00', isAvailable: true },
    ]
  },
]

export default function CourtPage() {
  const [selectedSlot, setSelectedSlot] = useState<{ date: string; time: string } | null>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)

  const handleSelectSlot = (date: string, time: string) => {
    setSelectedSlot({ date, time })
    setShowBookingModal(true)
  }

  return (
    <StadiumBackground>
      <Header />
      
      <main className="px-4 md:px-8 pb-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/70 mb-4">
          <Link href="/" className="hover:text-white">Início</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/quadras" className="hover:text-white">Buscar Quadra</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Arena Street Fut7</span>
        </nav>

        {/* Cabeçalho da quadra */}
        <section className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Arena Street Fut7 <span className="text-white/70 font-normal">- Quadra de Futebol Sintético</span>
          </h1>
          
          {/* Badge Google Places */}
          <Badge className="bg-primary text-white text-sm mb-3">
            G Google Places
          </Badge>
          
          {/* Avaliação */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="w-5 h-5 fill-yellow-400/50 text-yellow-400" />
            </div>
            <span className="text-white font-semibold">4.6</span>
            <span className="text-white/70 text-sm">Avaliação Google</span>
          </div>
          
          {/* Endereço */}
          <div className="flex items-center gap-2 text-white/80">
            <MapPin className="w-4 h-4 text-primary" />
            <span>R. Nossa Sra da Cabeça, 1845 - Cidade Industrial de Curitiba, Curitiba - PR</span>
          </div>
        </section>

        {/* Banner de horário reservado */}
        <div className="bg-primary/20 border border-primary/30 rounded-xl p-4 mb-6 flex items-center gap-3">
          <Clock className="w-5 h-5 text-primary" />
          <p className="text-white">
            Horário Reservado: <strong>Sexta-feira, 20 de fevereiro de 2026</strong> às <strong>19:00</strong>!
          </p>
        </div>

        {/* Card Agendar Horário */}
        <div className="bg-white rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-card-foreground">Agendar Horário</h2>
          </div>

          {/* Data */}
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <p className="text-card-foreground">
              <strong>Sexta-feira,</strong> 20 de fevereiro de 2026
            </p>
          </div>

          {/* Local */}
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="font-semibold text-card-foreground">Arena Street Fut7</p>
              <p className="text-sm text-muted-foreground">R. Nossa Sra da Cabeça, 1845, Cidade Industrial de Curitiba, Curitiba - PR</p>
            </div>
          </div>
        </div>

        {/* Horários Disponíveis */}
        <div className="bg-white rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-card-foreground">Horários Disponíveis - Próximos 7 dias</h2>
          </div>

          {/* Legenda */}
          <div className="space-y-2 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded" />
              <span><strong className="text-card-foreground">Agendar Horário:</strong> Seja o primeiro a marcar a reservar um em horário vazio</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full" />
              <span><strong className="text-card-foreground">Reservar Desafio:</strong> Entre na quadra de agendou em monitorago</span>
            </div>
          </div>

          {/* Lista de dias com horários */}
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="font-semibold text-card-foreground">{day.date}</span>
                <Badge variant="outline" className="bg-gray-100 text-gray-600 text-xs">
                  {day.label}
                </Badge>
              </div>
              
              {/* Grid de horários */}
              <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2">
                {day.slots.map((slot, slotIndex) => (
                  <TimeSlot
                    key={slotIndex}
                    time={slot.time}
                    isAvailable={slot.isAvailable}
                    isBooked={slot.isBooked}
                    bookedInfo={slot.bookedInfo}
                    isSelected={selectedSlot?.date === day.date && selectedSlot?.time === slot.time}
                    onClick={() => slot.isAvailable && handleSelectSlot(day.date, slot.time)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal de Reserva */}
      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        booking={{
          date: 'Sexta-feira, 20 de fevereiro de 2026',
          time: '19:00',
          arena: 'Arena Street Fut7',
          address: 'R. Nossa Sra da Cabeça, 1845, Cidade Industrial de Curitiba, Curitiba - PR',
          duration: 60,
          price: 95,
          credits: 0,
        }}
      />
    </StadiumBackground>
  )
}

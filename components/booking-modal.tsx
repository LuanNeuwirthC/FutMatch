'use client'

import { X, MapPin, Calendar, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  booking: {
    date: string
    time: string
    arena: string
    address: string
    duration: number
    price: number
    credits: number
  }
}

export function BookingModal({ isOpen, onClose, booking }: BookingModalProps) {
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
              <Calendar className="w-4 h-4 text-primary" />
            </div>
            <h2 className="font-bold text-lg text-card-foreground">Agendar Horário</h2>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-card-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-4 space-y-4">
          {/* Data e hora */}
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-card-foreground">
                <strong>{booking.date}</strong> às <strong className="text-primary">{booking.time}</strong>
              </p>
            </div>
          </div>

          {/* Local */}
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="font-semibold text-card-foreground">{booking.arena}</p>
              <p className="text-sm text-muted-foreground">{booking.address}</p>
            </div>
          </div>

          {/* Duração */}
          <div className="flex items-center justify-between py-2 border-t">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Duração:</span>
              <span className="text-card-foreground">{booking.duration} minutos</span>
            </div>
            <span className="font-semibold text-card-foreground">{booking.duration} minutos</span>
          </div>

          {/* Créditos */}
          <div className="flex items-center justify-between py-2">
            <div>
              <span className="text-muted-foreground">Créditos:</span>
              <span className="text-card-foreground ml-2">{booking.credits} créditos</span>
            </div>
            <span className="text-muted-foreground">{booking.credits} créditos disponíveis</span>
          </div>

          {/* Código promocional */}
          <div className="flex gap-2">
            <Input 
              placeholder="Código Promocional (opcional)" 
              className="flex-1 rounded-xl"
            />
            <Button variant="outline" className="bg-primary text-white hover:bg-primary/90 rounded-xl px-6">
              Aplicar
            </Button>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between py-3 border-t">
            <span className="text-muted-foreground">Total:</span>
            <div className="text-right">
              <span className="text-2xl font-bold text-primary">
                R$ {booking.price.toFixed(2).replace('.', ',')}
              </span>
              <span className="block text-sm text-muted-foreground">
                R$ {booking.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 rounded-xl text-lg">
            Confirmar Reserva
          </Button>
        </div>
      </div>
    </div>
  )
}

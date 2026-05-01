'use client'

import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TimeSlotProps {
  time: string
  isAvailable: boolean
  isSelected?: boolean
  isBooked?: boolean
  bookedInfo?: {
    teamName: string
    timeRange: string
  }
  onClick?: () => void
}

// Slot de horário disponível
export function TimeSlot({ time, isAvailable, isSelected, isBooked, bookedInfo, onClick }: TimeSlotProps) {
  // Slot já reservado por outro time
  if (isBooked && bookedInfo) {
    return (
      <div className="bg-accent/20 border-2 border-accent rounded-xl p-3 min-w-[120px] text-center">
        <div className="flex items-center justify-center gap-1 mb-1">
          <FutmatchMiniLogo />
          <span className="text-sm font-semibold text-card-foreground">
            {time.split(' ')[0]} às {time.split(' ')[2] || '10:00'}
          </span>
        </div>
        <div className="flex items-center justify-center gap-1 text-xs text-accent-foreground bg-accent/30 rounded-full px-2 py-0.5">
          <Check className="w-3 h-3" />
          {bookedInfo.timeRange}
        </div>
      </div>
    )
  }

  // Slot selecionado
  if (isSelected) {
    return (
      <button
        onClick={onClick}
        className="bg-white border-2 border-primary rounded-xl p-3 min-w-[120px] text-center relative"
      >
        <div className="absolute top-1 right-1">
          <Check className="w-4 h-4 text-primary" />
        </div>
        <span className="text-sm font-semibold text-card-foreground">{time}</span>
        <div className="flex items-center justify-center gap-1 text-xs text-white bg-accent rounded-full px-2 py-0.5 mt-1">
          <Check className="w-3 h-3" />
          19:00 às 20:06
        </div>
      </button>
    )
  }

  // Slot disponível
  if (isAvailable) {
    return (
      <button
        onClick={onClick}
        className="bg-white border border-border hover:border-primary rounded-xl p-3 min-w-[120px] text-center transition-colors"
      >
        <span className="text-sm font-semibold text-card-foreground">{time}</span>
        <p className="text-xs text-muted-foreground mt-1">+ Agendar Horário</p>
      </button>
    )
  }

  // Slot indisponível
  return (
    <div className="bg-muted border border-border rounded-xl p-3 min-w-[120px] text-center opacity-50">
      <span className="text-sm font-semibold text-muted-foreground">{time}</span>
      <p className="text-xs text-muted-foreground mt-1">Indisponível</p>
    </div>
  )
}

// Mini logo do Futmatch para slots reservados
function FutmatchMiniLogo() {
  return (
    <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
      <svg viewBox="0 0 20 20" className="w-3 h-3">
        <circle cx="10" cy="10" r="8" fill="white" />
        <path d="M10 5 L13 12 L7 12 Z" fill="#1a5f3c" />
      </svg>
    </div>
  )
}

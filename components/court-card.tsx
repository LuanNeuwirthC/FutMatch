import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CourtCardProps {
  id: string
  name: string
  location: string
  rating: number
  image: string
}

// Card de quadra disponível
export function CourtCard({ id, name, location, rating, image }: CourtCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg min-w-[200px] md:min-w-[240px]">
      {/* Imagem da quadra com rating */}
      <div className="relative h-32 md:h-36">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        {/* Badge de avaliação */}
        <div className="absolute top-2 right-2 bg-primary/90 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
          {rating}
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        </div>
      </div>
      
      {/* Informações */}
      <div className="p-3 md:p-4">
        <h3 className="font-bold text-card-foreground text-sm md:text-base">{name}</h3>
        <div className="flex items-center gap-1 text-muted-foreground text-xs md:text-sm mt-1">
          <MapPin className="w-3 h-3 text-primary" />
          <span>{location}</span>
        </div>
        
        <Link href={`/quadra/${id}`}>
          <Button className="w-full mt-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl">
            Reservar
          </Button>
        </Link>
      </div>
    </div>
  )
}

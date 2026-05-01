'use client'

import { Search, MapPin, Star, Filter } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { StadiumBackground } from '@/components/stadium-background'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

// Dados mockados das quadras
const allCourts = [
  { id: '1', name: 'Arena Central', location: 'São Paulo - SP', address: 'Av. Paulista, 1000', rating: 4.9, price: 95, image: 'https://images.unsplash.com/photo-1624880357913-a8539238245b?w=400&h=300&fit=crop' },
  { id: '2', name: 'Grama Premium', location: 'Rio de Janeiro - RJ', address: 'Rua Copacabana, 500', rating: 4.8, price: 120, image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=400&h=300&fit=crop' },
  { id: '3', name: 'Soccer Zone', location: 'Belo Horizonte - MG', address: 'Av. Afonso Pena, 2000', rating: 4.7, price: 80, image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=300&fit=crop' },
  { id: '4', name: 'Arena Praiana', location: 'Salvador - BA', address: 'Rua da Praia, 100', rating: 4.9, price: 110, image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop' },
  { id: '5', name: 'Arena Street Fut7', location: 'Curitiba - PR', address: 'R. Nossa Sra da Cabeça, 1845', rating: 4.6, price: 95, image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=400&h=300&fit=crop' },
  { id: '6', name: 'Campo Society', location: 'Porto Alegre - RS', address: 'Av. Ipiranga, 3000', rating: 4.5, price: 85, image: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=400&h=300&fit=crop' },
]

export default function QuadrasPage() {
  return (
    <StadiumBackground>
      <Header />
      
      <main className="px-4 md:px-8 pb-8 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">Buscar Quadras</h1>
        
        {/* Barra de busca */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Buscar por nome ou localização..." 
              className="pl-10 bg-white rounded-xl h-12"
            />
          </div>
          <Button variant="outline" className="bg-white rounded-xl h-12 px-4">
            <Filter className="w-5 h-5" />
          </Button>
        </div>

        {/* Lista de quadras */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {allCourts.map((court) => (
            <Link key={court.id} href={`/quadra/${court.id}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Imagem */}
                <div className="relative h-40">
                  <Image
                    src={court.image}
                    alt={court.name}
                    fill
                    className="object-cover"
                  />
                  {/* Badge de avaliação */}
                  <div className="absolute top-3 right-3 bg-primary/90 text-white text-sm font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    {court.rating}
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
                
                {/* Info */}
                <div className="p-4">
                  <h3 className="font-bold text-card-foreground text-lg">{court.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{court.location}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{court.address}</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-primary font-bold text-lg">
                      R$ {court.price.toFixed(2).replace('.', ',')}
                      <span className="text-sm font-normal text-muted-foreground">/hora</span>
                    </span>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 rounded-xl">
                      Reservar
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </StadiumBackground>
  )
}

// Componente de fundo do estádio com gradiente
export function StadiumBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative">
      {/* Imagem de fundo do estádio */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      
      {/* Overlay escuro com gradiente verde */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a1f14]/95 via-[#0d2818]/90 to-[#0a1f14]/95" />
      
      {/* Efeito de luz do estádio */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      
      {/* Partículas/brilho sutil */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-10 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-20 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-300" />
        <div className="absolute top-32 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse delay-500" />
      </div>
      
      {/* Conteúdo */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

import NavBar from '@/components/ui/NavBar'
import Hero from '@/components/ui/hero'
// CircleBadge and OrbitGroup are used inside `Hero`; avoid duplicating them here

export default function HomePage() {
  return (  
    <div>
        <NavBar />
        <Hero />
    </div>
   
  )
}
import { Button } from '@/components/ui/button'

const navItems = ['Accueil', 'Services', 'À propos', 'Contact']

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-transparent backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Accueil">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-transparent overflow-hidden">
            <img src="/LOGOS.png" alt="Logo de l'application" className="h-10 w-10 object-contain" />
          </div>
            {/* <p className="text-lg font-semibold tracking-tight text-slate-900">Soutenance</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">2026</p> */}
         
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Connexion
          </Button>
          <Button className="rounded-full bg-slate-900 text-white hover:bg-slate-700">
            Inscription
          </Button>
        </div>
      </nav>
    </header>
  )
}

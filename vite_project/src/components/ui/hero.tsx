
import React from 'react'
import { Button } from '@/components/ui/button'
import CircleBadge from '@/components/ui/circleBadge'
import OrbitGroup from '@/components/ui/orbitGroup'


export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[72vh] items-center overflow-hidden bg-slate-950">
      <img src= "Elevage.jpg" alt="image d'elevage en bg" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-slate-950/65" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left text-white">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm font-medium uppercase tracking-[0.2em] text-slate-200 backdrop-blur-sm">
           🐔 UNE PLATEFORME INTELLIGENTE POUR LES ACTEURS DE L'AVICULTURE
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Élevez mieux. <br />
            Anticipez les maladies.<br />
            Optimisez vos profits.<br />
            Gagnez en performance.
          </h1>

          <p className="mt-6 max-w-xl text-base text-slate-200 sm:text-lg">
           AvicCare est une plateforme intelligente conçue pour accompagner les éleveurs avicoles dans le suivi quotidien de leurs élevages, la surveillance de la santé des volailles et la détection précoce des maladies grâce à l’intelligence artificielle
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="rounded-full bg-white px-6 py-5 text-sm font-semibold text-slate-900 hover:bg-slate-100">
              Découvrir
            </Button>
            <Button variant="outline" className="rounded-full border-white/30 bg-white/5 px-6 py-5 text-sm font-semibold text-white hover:bg-white/10">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-[600px] h-[600px]">
        {/* Orbit items around the central circle. Items use emoji stickers */}
        <OrbitGroup
          items={[
            { id: 'sun', node: (
                <div className="group relative">
                  <CircleBadge size="h-20 w-20" ariaLabel="Diagnostic IA" title="Diagnostic IA">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-3xl" role="img" aria-label="Diagnostic IA">🤖</span>
                      
                    </div>
                  </CircleBadge>
                </div>
              ) },
            //cette ligne est un exemple d'élément orbitant, 
            // id est un identifiant unique pour chaque élément,
            //  node est le contenu à afficher (size est la taille du badge, 
            // ariaLabel est pour l'accessibilité, et l'image est l'icône à afficher)
            { id: 'tractor', node: (
                <div className="group relative">
                  <CircleBadge size="h-20 w-20" ariaLabel="Gestion des élevages" title="Gestion des élevages">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-3xl" role="img" aria-label="Gestion des élevages">🐔</span>
                      
                    </div>
                  </CircleBadge>
                 
                </div>
              ) },
            { id: 'water', node: (
                <div className="group relative">
                  <CircleBadge size="h-20 w-20" ariaLabel="Suivi zootechnique" title="Suivi zootechnique">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-3xl" role="img" aria-label="Suivi zootechnique">📊</span>
                      
                    </div>
                  </CircleBadge>
                  
                  
                </div>
              ) },
            { id: 'thermo', node: (
                <div className="group relative">
                  <CircleBadge size="h-20 w-20" ariaLabel="Santé avicole" title="Santé avicole">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-3xl" role="img" aria-label="Santé avicole">🩺</span>
                     
                    </div>
                  </CircleBadge>
                  
                </div>
              ) },
            { id: 'combine', node: (
                <div className="group relative">
                  <CircleBadge size="h-20 w-20" ariaLabel="Alertes sanitaires" title="Alertes sanitaires">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-3xl" role="img" aria-label="Alertes sanitaires">🔔</span>
                      
                    </div>
                  </CircleBadge>
                  
                </div>
              ) },
            { id: 'worker', node: (
                <div className="group relative">
                  <CircleBadge size="h-20 w-20" ariaLabel="Assistance vétérinaire" title="Assistance vétérinaire">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-3xl" role="img" aria-label="Assistance vétérinaire">👨‍⚕️</span>
                     
                    </div>
                  </CircleBadge>
                  
                </div>
              ) },
            { id: 'vet', node: (
                <div className="group relative">
                  <CircleBadge size="h-20 w-20" ariaLabel="Vétérinaires à proximité" title="Vétérinaires à proximité">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-3xl" role="img" aria-label="Vétérinaires à proximité">📍</span>
                      
                    </div>
                  </CircleBadge>
                 
                </div>
              ) },
          ]}
          radius={150} // taille du rayon de l'orbite 
          durationSec={14}//durée de la rotation
        />
        
      </div>
    </section>
  )
}

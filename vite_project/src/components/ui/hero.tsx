import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/bouton'
import ListeModules from '@/components/ui/listeModules'
import DescriptionModule from '@/components/ui/descriptionModule'

export default function Hero() {
  const displaySec = 6 // time each explanation is shown

  const itemsData = [
    { id: 'sun', emoji: '🤖', label: 'Diagnostic IA', title: 'Diagnostic IA', description: "Analyse les données et fournit des diagnostics précoces pour détecter les maladies.", accent: '#10b981' },
    { id: 'tractor', emoji: '🐔', label: 'Gestion des élevages', title: 'Gestion des élevages', description: "Gère les cycles, effectifs et performances de vos élevages.", accent: '#10b981' },
    { id: 'water', emoji: '📊', label: 'Suivi zootechnique', title: 'Suivi zootechnique', description: 'Indicateurs de croissance, consommation et performances en temps réel.', accent: '#10b981' },
    { id: 'thermo', emoji: '🩺', label: 'Santé avicole', title: 'Santé avicole', description: 'Surveillance sanitaire et historiques des traitements.', accent: '#10b981' },
    { id: 'combine', emoji: '🔔', label: 'Alertes sanitaires', title: 'Alerte sanitaire', description: "Au vu des informations sanitaires enregistrées, une alerte sanitaire vous sera communiquée en temps réel pour vous permettre d'agir vite et protéger vos élevages.", accent: '#f59e0b' },
    { id: 'worker', emoji: '👨‍⚕️', label: 'Assistance vétérinaire', title: 'Assistance vétérinaire', description: 'Contactez un vétérinaire ou demandez une consultation à distance.', accent: '#10b981' },
    { id: 'vet', emoji: '📍', label: 'Vétérinaires à proximité', title: 'Vétérinaires à proximité', description: 'Localise les vétérinaires proches et affiche leurs coordonnées.', accent: '#10b981' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentIndex(i => (i + 1) % itemsData.length)
    }, displaySec * 1000)
    return () => clearInterval(t)
  }, [])

  const currentItem = itemsData[currentIndex]

  return (
    <section className="relative isolate flex min-h-[72vh] items-center overflow-hidden bg-slate-950">
      <img src= "Elevage.jpg" alt="image d'elevage en bg" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-slate-950/65" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* En-tête de la page : titre, accroche, et CTA */}
        <div className="max-w-2xl text-left text-white mb-8">
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

        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-8">
            <DescriptionModule item={currentItem} />
          </div>

          <div className="col-span-12 md:col-span-4">
            <ListeModules items={itemsData} currentIndex={currentIndex} onSelect={setCurrentIndex} displaySec={displaySec} />
          </div>
        </div>
      </div>
    </section>
  )
}

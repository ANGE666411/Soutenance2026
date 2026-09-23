import React, { useState } from 'react'
import { Layers, Smartphone, Cpu, CheckCheck, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Configuration de la Bande',
    subtitle: 'Enregistrement en 2 minutes',
    description: 'Renseignez l’effectif de poussins, la souche (Ross 308, Cobb 500, Isa Brown) et la capacité du bâtiment.',
    icon: Layers,
    details: ['Planning vaccinal généré automatiquement', 'Courbe de croissance personnalisée'],
  },
  {
    number: '02',
    title: 'Saisie Quotidienne & IoT',
    subtitle: 'Application mobile offline',
    description: 'Enregistrez en quelques clics les consommations d’eau, d’aliment et les pertes journalières.',
    icon: Smartphone,
    details: ['Fonctionne sans connexion internet', 'Synchronisation automatique au retour du réseau'],
  },
  {
    number: '03',
    title: 'Analyse Prédictive par IA',
    subtitle: 'Surveillance sentinelle 24/7',
    description: 'L’IA décèle les signaux avant-coureurs de pathologie et évalue le niveau de risque sanitaire.',
    icon: Cpu,
    details: ['Détection précoce des foyers infectieux', 'Alerte immédiate par notification'],
  },
  {
    number: '04',
    title: 'Avis Vétérinaire & Vente',
    subtitle: 'Marge et cheptel préservés',
    description: 'Le praticien valide le protocole de soin. Vous évitez les surmédications et atteignez le poids cible.',
    icon: CheckCheck,
    details: ['Ordonnance ciblée sans délai', 'Bilan zootechnique et marge nette'],
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-it-works" className="relative py-28 bg-slate-950 border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3.5 py-1 text-xs font-medium text-emerald-300">
            <span>Workflow Simplifié</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Comment Fonctionne AvicCare
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Un accompagnement méthodique, de l’arrivée des poussins d’un jour jusqu’à la sortie de la bande.
          </p>
        </div>

        {/* 4 Étapes Horizontales Spacieuses */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isActive = activeStep === idx
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-200 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900/80 border-emerald-500/40 shadow-xl shadow-black/40'
                    : 'bg-slate-900/20 border-white/[0.06] hover:bg-slate-900/40 hover:border-white/[0.12]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-slate-500">
                      {step.number}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] text-emerald-400">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-base sm:text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <div className="text-xs text-emerald-400 font-medium mt-0.5">
                    {step.subtitle}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-1.5">
                  {step.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

import React from 'react'
import { TrendingDown, TrendingUp, Cpu, Clock } from 'lucide-react'

const stats = [
  {
    icon: TrendingDown,
    value: '-78%',
    label: 'Mortalité Précoce',
    description: 'Foyers infectieux identifiés dès les premières 24h',
  },
  {
    icon: TrendingUp,
    value: '+24.5%',
    label: 'Marge Nette par Bande',
    description: 'Amélioration de l\'indice de consommation (FCR)',
  },
  {
    icon: Cpu,
    value: '99.2%',
    label: 'Précision Diagnostique',
    description: 'Inférence validée sur 15 pathologies aviaires',
  },
  {
    icon: Clock,
    value: '< 2h',
    label: 'Avis Vétérinaire',
    description: 'Télé-expertise sans déplacement superflu',
  },
]

export default function StatsBanner() {
  return (
    <section className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10">
      <div className="rounded-3xl border border-white/[0.08] bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-between ${
                idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''
              }`}
            >
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  {stat.value}
                </span>
                <h3 className="text-sm font-bold text-slate-200 mt-2">{stat.label}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

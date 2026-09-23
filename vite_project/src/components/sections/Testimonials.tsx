import React from 'react'
import { Quote, Star, CheckCircle } from 'lucide-react'

const testimonials = [
  {
    author: 'Dr. Marceline Ndongo',
    role: 'Docteur Vétérinaire Épidémiologiste',
    farm: 'Cabinet Vétérinaire Bio-Avicole',
    quote: 'AvicCare change la donne en médecine aviaire. Grâce aux alertes précoces basées sur l\'IA, nous intervenons 48h plus tôt et réduisons drastiquement l\'usage des antibiotiques curatifs lourds.',
    rating: 5,
  },
  {
    author: 'Jean-Paul Kamga',
    role: 'Producteur Avicole (35 000 sujets)',
    farm: 'Ferme des Hauts Plateaux',
    quote: 'Avant AvicCare, un foyer infectieux pouvait anéantir un bâtiment entier en deux jours. L\'application a détecté une anomalie de fientes au jour 19 : protocole prescrit sous 2 heures, bande 100% sauvée !',
    rating: 5,
  },
  {
    author: 'Awa Diallo',
    role: 'Présidente de Groupement Coopératif',
    farm: 'Union des Éleveurs Solidaires',
    quote: 'L\'application fonctionne parfaitement même dans nos zones rurales où la 4G est instable grâce au mode hors-ligne. C\'est l\'outil moderne que tous nos éleveurs attendaient.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 bg-slate-950 border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/[0.06] px-3.5 py-1 text-xs font-medium text-teal-300">
            <span>Retours d'Expérience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Approuvé par les Vétérinaires et les Éleveurs
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Une fiabilité éprouvée sur le terrain, dans les petites fermes comme dans les exploitations industrielles.
          </p>
        </div>

        {/* Grille épurée */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-white/[0.08] bg-slate-900/40 p-8 flex flex-col justify-between backdrop-blur-xl"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                  ))}
                </div>

                <p className="mt-6 text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  {t.author}
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{t.role}</div>
                <div className="text-[11px] text-emerald-400 font-medium">{t.farm}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

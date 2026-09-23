import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "Comment l'application fonctionne-t-elle en zone rurale sans connexion internet ?",
    answer: "AvicCare intègre un mode hors-ligne natif : vous pouvez enregistrer les données quotidiennes et lancer des pré-diagnostics même sans réseau. Dès que votre smartphone capte à nouveau la 3G/4G ou le Wi-Fi, la synchronisation sécurisée avec le cloud s'effectue automatiquement.",
  },
  {
    question: "Quelles sont les données utilisées pour entraîner le modèle d'IA ?",
    answer: "Le modèle d'IA AvicCare est entraîné sur plus de 45 000 photographies lésionnelles et fiches cliniques annotées par des vétérinaires spécialisés en pathologie aviaire. Il couvre les principales maladies aviaires (Gumboro, Coccidiose, Bronchite Infectieuse, etc.) avec 99.2% de précision.",
  },
  {
    question: "L'intelligence artificielle remplace-t-elle le vétérinaire ?",
    answer: "Non. AvicCare est un outil d'aide à la décision et d'alerte précoce. Il permet à l'éleveur d'identifier le danger dès les premières heures et transmet le dossier complet au vétérinaire référent qui établit la prescription officielle.",
  },
  {
    question: "Quel est le délai moyen pour rentabiliser l'utilisation de la solution ?",
    answer: "Dès le premier cycle d'élevage : en prévenant un seul épisode épidémique aigu et en réduisant la mortalité habituelle de 7 à 8% à moins de 3%, le gain financier compense largement le coût de la solution.",
  },
  {
    question: "Mes données d'exploitation restent-elles confidentielles ?",
    answer: "Absolument. Vos données sont chiffrées selon les standards bancaires (AES-256) et restent votre propriété exclusive. Elles ne sont jamais partagées avec des tiers ou des marchands d'aliments sans votre accord explicite.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-28 bg-slate-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3.5 py-1 text-xs font-medium text-emerald-300">
            <HelpCircle className="h-3.5 w-3.5 text-emerald-400" />
            <span>Foire aux Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Questions Fréquentes
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Retrouvez les réponses aux interrogations techniques, sanitaires et économiques les plus courantes.
          </p>
        </div>

        {/* Liste accordéon épurée */}
        <div className="mt-14 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-500/30 bg-slate-900/50'
                    : 'border-white/[0.06] bg-slate-900/20 hover:border-white/[0.12]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm sm:text-base font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-emerald-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-300' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

import React, { useState } from 'react'
import { Calculator, ArrowRight, ShieldCheck } from 'lucide-react'

export default function RoiCalculator() {
  const [flockSize, setFlockSize] = useState<number>(10000)
  const [productionType, setProductionType] = useState<'chair' | 'pondeuse'>('chair')

  // Modélisation des gains moyens observés
  const mortalityGainPercent = 0.062 // 6.2% de volailles sauvées
  const birdsSaved = Math.round(flockSize * mortalityGainPercent)
  
  const pricePerBirdFcfa = productionType === 'chair' ? 3800 : 4500
  const feedSavedPerBirdFcfa = productionType === 'chair' ? 140 : 220

  const additionalRevenueFcfa = birdsSaved * pricePerBirdFcfa
  const feedSavingsFcfa = flockSize * feedSavedPerBirdFcfa
  const totalGainFcfa = additionalRevenueFcfa + feedSavingsFcfa
  const totalGainEuros = Math.round(totalGainFcfa / 655.957)

  return (
    <section id="roi" className="relative py-28 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3.5 py-1 text-xs font-medium text-emerald-300">
            <Calculator className="h-3.5 w-3.5 text-emerald-400" />
            <span>Rentabilité & ROI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Simulateur de Gains Financiers
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Évaluez les pertes évitées et l'optimisation des aliments générées par l'anticipation sanitaire.
          </p>
        </div>

        {/* Panneau épuré */}
        <div className="mt-14 rounded-3xl border border-white/[0.08] bg-slate-900/40 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Contrôles du calculateur */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2.5">
                  Type d'élevage
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setProductionType('chair')}
                    className={`rounded-2xl p-4 text-left transition-all border ${
                      productionType === 'chair'
                        ? 'bg-white/[0.08] border-emerald-500/50 text-white'
                        : 'bg-white/[0.02] border-white/[0.05] text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-sm font-bold">Poulets de Chair</div>
                    <div className="text-xs text-slate-400 mt-0.5">Cycle de 35 à 45 jours</div>
                  </button>

                  <button
                    onClick={() => setProductionType('pondeuse')}
                    className={`rounded-2xl p-4 text-left transition-all border ${
                      productionType === 'pondeuse'
                        ? 'bg-white/[0.08] border-emerald-500/50 text-white'
                        : 'bg-white/[0.02] border-white/[0.05] text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-sm font-bold">Poules Pondeuses</div>
                    <div className="text-xs text-slate-400 mt-0.5">Production d'œufs continue</div>
                  </button>
                </div>
              </div>

              {/* Slider Cheptel */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Taille du Cheptel
                  </span>
                  <span className="font-mono text-xl font-bold text-emerald-400">
                    {flockSize.toLocaleString('fr-FR')} têtes
                  </span>
                </div>

                <input
                  type="range"
                  min="2000"
                  max="50000"
                  step="1000"
                  value={flockSize}
                  onChange={(e) => setFlockSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500 border border-white/10"
                />

                <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1.5">
                  <span>2 000</span>
                  <span>25 000</span>
                  <span>50 000</span>
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.02] border border-white/[0.05] p-3.5 flex items-center gap-3 text-xs text-slate-300">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Base de calcul : <strong>6.2%</strong> de réduction de mortalité et <strong>0.15 pt</strong> d'indice de consommation.</span>
              </div>
            </div>

            {/* Carte de résultats */}
            <div className="lg:col-span-6 rounded-3xl bg-slate-950 border border-white/[0.08] p-8 shadow-xl">
              <span className="text-xs font-mono uppercase text-emerald-400 font-semibold block">
                BÉNÉFICE NET ESTIMÉ PAR BANDE
              </span>

              <div className="mt-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                  {totalGainFcfa.toLocaleString('fr-FR')}{' '}
                  <span className="text-lg text-emerald-400 font-bold">FCFA</span>
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  soit environ <span className="text-emerald-300 font-bold">~{totalGainEuros.toLocaleString('fr-FR')} €</span> de valeur préservée
                </div>
              </div>

              <div className="mt-6 space-y-2.5 font-mono text-xs border-t border-white/[0.08] pt-5">
                <div className="flex justify-between text-slate-300">
                  <span>Volailles sauvées :</span>
                  <span className="font-bold text-emerald-400">+{birdsSaved.toLocaleString('fr-FR')} sujets</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Valeur des sujets préservés :</span>
                  <span className="font-bold text-white">+{additionalRevenueFcfa.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Économie d'aliment (IC optimisé) :</span>
                  <span className="font-bold text-teal-300">+{feedSavingsFcfa.toLocaleString('fr-FR')} FCFA</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#simulator"
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 py-3.5 text-xs sm:text-sm font-bold text-slate-950 transition-all"
                >
                  <span>Démarrer avec votre élevage</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

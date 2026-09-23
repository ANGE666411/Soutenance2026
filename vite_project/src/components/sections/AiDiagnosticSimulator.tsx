import React, { useState } from 'react'
import { Sparkles, Activity, RefreshCw, Send, ShieldAlert, Cpu, FileText, Stethoscope } from 'lucide-react'

type ClinicalCase = {
  id: string
  name: string
  speculation: string
  age: string
  symptoms: string[]
  mortality: string
  diagnosis: string
  probability: number
  riskLevel: 'CRITIQUE' | 'ÉLEVÉ' | 'FAIBLE'
  recommendedAction: string
  veterinaryProtocol: string
}

const CASES: ClinicalCase[] = [
  {
    id: 'gumboro',
    name: 'Cas #1 : Abattement aigu & fientes aqueuses',
    speculation: 'Poulets de chair',
    age: '22 jours',
    symptoms: ['Prostration marquée', 'Diarrhée blanchâtre aqueuse', 'Plumage ébouriffé', 'Déshydratation rapide'],
    mortality: '+3.8% en 24h',
    diagnosis: 'Suspicion : Bursite Infectieuse (Maladie de Gumboro)',
    probability: 98.4,
    riskLevel: 'CRITIQUE',
    recommendedAction: 'Isolement immédiat du bâtiment. Réhydratation par électrolytes et vitamines. Arrêt immédiat des transferts de matériel.',
    veterinaryProtocol: 'Confirmation sérologique urgente et protocole d\'immunostimulation prescrit par le vétérinaire.',
  },
  {
    id: 'coccidiosis',
    name: 'Cas #2 : Fientes hémorragiques & anémie',
    speculation: 'Poulets de chair',
    age: '28 jours',
    symptoms: ['Traces de sang dans les fientes', 'Pâleur des crêtes', 'Baisse subite de consommation', 'Tassement des volailles'],
    mortality: '+2.4% en 48h',
    diagnosis: 'Suspicion : Coccidiose Caecale (Eimeria tenella)',
    probability: 96.1,
    riskLevel: 'ÉLEVÉ',
    recommendedAction: 'Traitement anticoccidien dans l\'eau de boisson. Retrait immédiat des litières humides près des abreuvoirs.',
    veterinaryProtocol: 'Analyse coproscopique de contrôle sous 24h requise.',
  },
  {
    id: 'healthy',
    name: 'Cas #3 : Lot témoin sain & optimal',
    speculation: 'Poulets de chair',
    age: '15 jours',
    symptoms: ['Activité et vigilance normales', 'Consommation conforme à la souche', 'Fientes moulées', 'Litière sèche et friable'],
    mortality: '0.08% (normal)',
    diagnosis: 'État Sanitaire Normal — Aucune anomalie détectée',
    probability: 99.8,
    riskLevel: 'FAIBLE',
    recommendedAction: 'Maintenir les protocoles de biosécurité. Poursuivre le suivi régulier du poids.',
    veterinaryProtocol: 'Visite de suivi sanitaire de routine programmée.',
  },
]

export default function AiDiagnosticSimulator() {
  const [selectedCase, setSelectedCase] = useState<ClinicalCase>(CASES[0])
  const [isScanning, setIsScanning] = useState(false)
  const [scanStep, setScanStep] = useState(0)

  const handleRunInference = () => {
    setIsScanning(true)
    setScanStep(1)
    setTimeout(() => setScanStep(2), 400)
    setTimeout(() => setScanStep(3), 800)
    setTimeout(() => {
      setIsScanning(false)
    }, 1200)
  }

  return (
    <section id="simulator" className="relative py-28 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header de la section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3.5 py-1 text-xs font-medium text-emerald-300">
            <Cpu className="h-3.5 w-3.5 text-emerald-400" />
            <span>Moteur d'Inférence IA AvicCare</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Simulateur de Diagnostic Prédictif
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Sélectionnez un cas clinique représentatif pour observer la vitesse et la précision de l'analyse pathologique.
          </p>
        </div>

        {/* Sélecteur épuré de cas */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {CASES.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCase(c)}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all border ${
                selectedCase.id === c.id
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/20'
                  : 'bg-white/[0.03] text-slate-300 border-white/[0.08] hover:bg-white/[0.08] hover:text-white'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Conteneur principal épuré */}
        <div className="mt-10 rounded-3xl border border-white/[0.08] bg-slate-900/50 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Colonne gauche : Symptômes et paramètres */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400">Élevage analysé</span>
                  <div className="text-lg font-bold text-white">{selectedCase.speculation}</div>
                </div>
                <span className="rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-xs font-mono text-slate-300">
                  Âge : {selectedCase.age}
                </span>
              </div>

              {/* Télémétrie succincte */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-950/70 p-3.5 border border-white/[0.05]">
                  <span className="text-[10px] text-slate-400 uppercase block">Variation Mortalité</span>
                  <span className="text-sm font-bold text-rose-400 font-mono mt-0.5 block">
                    {selectedCase.mortality}
                  </span>
                </div>
                <div className="rounded-2xl bg-slate-950/70 p-3.5 border border-white/[0.05]">
                  <span className="text-[10px] text-slate-400 uppercase block">Ambiance Bâtiment</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono mt-0.5 block">
                    Normes respectées
                  </span>
                </div>
              </div>

              {/* Signes observés */}
              <div>
                <span className="text-xs font-semibold text-slate-300 block mb-2">
                  Signes cliniques enregistrés :
                </span>
                <div className="space-y-1.5">
                  {selectedCase.symptoms.map((s, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 rounded-xl bg-slate-950/40 px-3.5 py-2 text-xs text-slate-300 border border-white/[0.04]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bouton de scan */}
              <button
                onClick={handleRunInference}
                disabled={isScanning}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-md shadow-emerald-500/20 transition-all"
              >
                {isScanning ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span>Inférence en cours ({scanStep}/3)...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    <span>Lancer l'analyse du cas</span>
                  </>
                )}
              </button>
            </div>

            {/* Colonne droite : Résultat et recommandations */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-slate-950/80 border border-white/[0.08] p-6 min-h-[380px] flex flex-col justify-between shadow-inner">
                
                <div className="space-y-6">
                  {/* Résultat Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400">Rapport de Diagnostic</span>
                      <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                        {selectedCase.diagnosis}
                      </h3>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold font-mono border ${
                        selectedCase.riskLevel === 'CRITIQUE'
                          ? 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                          : selectedCase.riskLevel === 'ÉLEVÉ'
                          ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                          : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                      }`}
                    >
                      {selectedCase.riskLevel}
                    </span>
                  </div>

                  {/* Jauge de probabilité */}
                  <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/[0.05]">
                    <div className="flex justify-between items-center text-xs font-mono mb-2 text-slate-300">
                      <span>Confiance du modèle :</span>
                      <span className="text-base font-bold text-emerald-400">{selectedCase.probability}%</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700"
                        style={{ width: `${selectedCase.probability}%` }}
                      />
                    </div>
                  </div>

                  {/* Action Recommandée */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <ShieldAlert className="h-4 w-4" />
                      Mesures Immédiates
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 bg-white/[0.02] p-3 rounded-xl border border-white/[0.04] leading-relaxed">
                      {selectedCase.recommendedAction}
                    </p>
                  </div>

                  {/* Avis Vétérinaire */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                      <Stethoscope className="h-4 w-4" />
                      Protocole Vétérinaire
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 bg-teal-950/20 p-3 rounded-xl border border-teal-500/20 leading-relaxed">
                      {selectedCase.veterinaryProtocol}
                    </p>
                  </div>
                </div>

                {/* Bouton de mise en relation */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-slate-400">180+ praticiens vétérinaires connectés</span>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Contacter le vétérinaire d'astreinte</span>
                    <Send className="h-3 w-3" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

import React, { useState } from 'react'
import { Sparkles, ArrowRight, ShieldCheck, Activity, Stethoscope, ChevronRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'vision' | 'telemed' | 'zoo'>('vision')

  return (
    <section className="relative isolate pt-32 pb-24 overflow-hidden bg-slate-950">
      {/* Halo lumineux doux et discret en arrière-plan */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* En-tête : Titre & Accroche épurée */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Badge élégant */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <span>Aviculture de Précision & Santé Animale</span>
          </div>

          {/* Titre Principal */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            L'anticipation sanitaire au service de{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
              vos élevages.
            </span>
          </h1>

          {/* Description claire et aérée */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            AvicCare combine vision par ordinateur et télémédecine vétérinaire pour détecter les pathologies aviaires avant leur propagation et sécuriser la rentabilité de chaque bande.
          </p>

          {/* Boutons d'Action */}
          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <a
              href="#simulator"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all duration-200"
            >
              <span>Tester le simulateur IA</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] px-6 py-3.5 text-sm font-medium text-slate-200 transition-colors"
            >
              <span>Découvrir la solution</span>
            </a>
          </div>

          {/* Micro-preuves de confiance */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Précision diagnostique 99.2%
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Prise en charge vétérinaire &lt; 2h
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Mode hors-ligne pour zones rurales
            </span>
          </div>
        </div>

        {/* Le Showcase Visuel Architectural */}
        <div className="mt-16 relative mx-auto max-w-5xl">
          
          {/* Cadre principal avec photo d'ambiance d'élevage */}
          <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 overflow-hidden shadow-2xl shadow-black/80 aspect-[16/10] sm:aspect-[16/9]">
            <img
              src="/Elevage.jpg"
              alt="Bâtiment d'élevage moderne AvicCare"
              className="h-full w-full object-cover object-center filter brightness-90 contrast-105"
            />
            {/* Dégradé doux pour faire ressortir les widgets */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

            {/* Widget 1 : Indicateur Sanitaire Global (Haut Droite) */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 rounded-2xl border border-white/10 bg-slate-950/75 backdrop-blur-xl p-3 sm:p-4 shadow-xl max-w-[220px] sm:max-w-[260px]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Index Sanitaire</span>
                <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Optimal
                </span>
              </div>
              <div className="mt-2 text-2xl font-black text-white font-mono">99.4%</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Bâtiment 02 • 12 000 sujets</div>
            </div>

            {/* Widget 2 : Sentinelle Pathologique (Bas Gauche) */}
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 rounded-2xl border border-white/10 bg-slate-950/75 backdrop-blur-xl p-3.5 sm:p-4 shadow-xl max-w-[240px] sm:max-w-[280px]">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Surveillance Continue</div>
                  <div className="text-[11px] text-slate-400">Aucun signe de foyer infectieux</div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/10">
                <span>Dernière analyse</span>
                <span className="text-emerald-400 font-medium">Il y a 3 min</span>
              </div>
            </div>

            {/* Widget 3 : Télémétrie d'Ambiance (Bas Droite) */}
            <div className="hidden sm:flex absolute bottom-8 right-8 rounded-2xl border border-white/10 bg-slate-950/75 backdrop-blur-xl p-4 shadow-xl gap-4 font-mono text-xs">
              <div>
                <span className="text-[10px] uppercase text-slate-400 block">Température</span>
                <span className="text-sm font-bold text-white">28.4°C</span>
              </div>
              <div className="border-l border-white/10 pl-4">
                <span className="text-[10px] uppercase text-slate-400 block">Hygrométrie</span>
                <span className="text-sm font-bold text-emerald-300">62%</span>
              </div>
              <div className="border-l border-white/10 pl-4">
                <span className="text-[10px] uppercase text-slate-400 block">Croissance (GMQ)</span>
                <span className="text-sm font-bold text-teal-300">+56 g/j</span>
              </div>
            </div>

          </div>

          {/* Sélecteur de fonctionnalités clés en bas du cadre */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setActiveTab('vision')}
              className={`rounded-2xl p-4 text-left transition-all border ${
                activeTab === 'vision'
                  ? 'bg-white/[0.06] border-emerald-500/40 text-white'
                  : 'bg-transparent border-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <div className="text-xs font-mono uppercase text-emerald-400 font-semibold">01. Vision IA</div>
              <div className="text-sm font-bold text-white mt-1">Détection Précoce</div>
              <div className="text-xs text-slate-400 mt-0.5">Analyse des fientes et postures</div>
            </button>

            <button
              onClick={() => setActiveTab('telemed')}
              className={`rounded-2xl p-4 text-left transition-all border ${
                activeTab === 'telemed'
                  ? 'bg-white/[0.06] border-emerald-500/40 text-white'
                  : 'bg-transparent border-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <div className="text-xs font-mono uppercase text-teal-400 font-semibold">02. Télémédecine</div>
              <div className="text-sm font-bold text-white mt-1">Avis Vétérinaire</div>
              <div className="text-xs text-slate-400 mt-0.5">Télé-expertise certifiée en &lt; 2h</div>
            </button>

            <button
              onClick={() => setActiveTab('zoo')}
              className={`rounded-2xl p-4 text-left transition-all border ${
                activeTab === 'zoo'
                  ? 'bg-white/[0.06] border-emerald-500/40 text-white'
                  : 'bg-transparent border-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <div className="text-xs font-mono uppercase text-emerald-400 font-semibold">03. Zootechnie</div>
              <div className="text-sm font-bold text-white mt-1">Indicateurs IC & GMQ</div>
              <div className="text-xs text-slate-400 mt-0.5">Optimisation des rations et gains</div>
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}

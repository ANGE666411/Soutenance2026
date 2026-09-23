import React from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-slate-900/60 to-slate-950 p-8 sm:p-14 text-center backdrop-blur-xl">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight">
            Prêt à Sécuriser la Santé et la Rentabilité de vos Élevages ?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Rejoignez les éleveurs modernes qui éliminent l'imprévu sanitaire grâce à l'anticipation par intelligence artificielle.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href="#simulator"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/20 transition-all"
            >
              <span>Accéder au simulateur en direct</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] px-6 py-3.5 text-xs sm:text-sm font-medium text-slate-200 transition-colors"
            >
              <span>Découvrir les fonctionnalités</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 pt-6 border-t border-white/[0.06]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Installation rapide sans matériel lourd
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Accès vétérinaire continu
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Données fermières 100% sécurisées
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { Sparkles, Activity, ShieldCheck, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react'

export type ModuleItem = {
  id: string
  emoji: string
  label: string
  title: string
  description: string
  tag: string
  metricLabel: string
  metricValue: string
  accentColor: string
  actionText: string
  previewType: 'ai' | 'farm' | 'chart' | 'health' | 'alert' | 'vet' | 'map'
}

type Props = {
  item: ModuleItem
}

export default function DescriptionModule({ item }: Props) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl shadow-emerald-950/30 transition-all duration-300">
      {/* Glow orb décoratif en fond */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />

      {/* Barre supérieure : Tag de module & Statut */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl shadow-inner border border-white/10">
            {item.emoji}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
                {item.tag}
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300 border border-emerald-500/20">
                Module Certifié
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-0.5">
              {item.title}
            </h3>
          </div>
        </div>

        {/* Métrique Clé du Module */}
        <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-2">
          <Activity className="h-5 w-5 text-emerald-400" />
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-wider text-slate-400">{item.metricLabel}</div>
            <div className="text-lg font-bold text-white font-mono">{item.metricValue}</div>
          </div>
        </div>
      </div>

      {/* Description & Points d'impact */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 space-y-4">
          <p className="text-base sm:text-lg leading-relaxed text-slate-300">
            {item.description}
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 rounded-xl p-2.5 border border-white/5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Analyse continue 24/7</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 rounded-xl p-2.5 border border-white/5">
              <ShieldCheck className="h-4 w-4 text-teal-400 shrink-0" />
              <span>Conformité vétérinaire</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#simulator"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:shadow-emerald-500/40 transition-all duration-200"
            >
              <span>{item.actionText}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Preview visuelle / Télémétrie factice du module */}
        <div className="lg:col-span-5 rounded-2xl bg-slate-950/80 border border-white/10 p-4 shadow-inner">
          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/5 font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              TELEMETRIE TEMPS REEL
            </span>
            <span>AVIC-CORE 2026</span>
          </div>

          <div className="py-4 space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span className="text-slate-400">Fiabilité Inférence</span>
              <span className="text-emerald-400 font-bold">99.2%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full w-[99.2%]" />
            </div>

            <div className="flex justify-between items-center text-slate-300 pt-1">
              <span className="text-slate-400">Latence Diagnostic</span>
              <span className="text-teal-300">320 ms</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
              <div className="bg-teal-400 h-full rounded-full w-[25%]" />
            </div>

            <div className="mt-3 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center gap-2">
              <Sparkles className="h-4 w-4 shrink-0 text-emerald-400" />
              <span>Algorithme calibré sur +45 000 cas avicoles certifiés.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { ChevronRight } from 'lucide-react'
import type { ModuleItem } from './descriptionModule'

type Props = {
  items: ModuleItem[]
  currentIndex: number
  onSelect: (index: number) => void
  displaySec?: number
}

export default function ListeModules({ items, currentIndex, onSelect, displaySec = 6 }: Props) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between pb-1 px-1">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Modules Piliers de la Plateforme ({items.length})
        </div>
        <span className="text-[11px] text-slate-500 font-mono">Rotation {displaySec}s</span>
      </div>

      <div className="space-y-2">
        {items.map((it, i) => {
          const isActive = currentIndex === i
          return (
            <button
              key={it.id}
              onClick={() => onSelect(i)}
              className={`group relative w-full text-left flex items-center justify-between rounded-2xl p-3 sm:p-3.5 transition-all duration-300 border ${
                isActive
                  ? 'bg-gradient-to-r from-emerald-950/60 to-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-950/40 scale-[1.01]'
                  : 'bg-slate-900/40 border-white/5 hover:bg-slate-900/70 hover:border-white/10'
              }`}
            >
              {/* Indicateur de progression temporelle sur l'élément actif */}
              {isActive && (
                <div
                  className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full overflow-hidden"
                >
                  <div
                    className="h-full bg-white/40 animate-pulse"
                    style={{ animationDuration: `${displaySec}s` }}
                  />
                </div>
              )}

              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg transition-transform duration-200 group-hover:scale-110 ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-white/5 text-slate-300 border border-white/5'
                  }`}
                >
                  {it.emoji}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-xs sm:text-sm font-semibold truncate ${
                        isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {it.label}
                    </span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate max-w-[200px] sm:max-w-[240px]">
                    {it.description}
                  </div>
                </div>
              </div>

              <div
                className={`ml-2 shrink-0 transition-transform duration-200 ${
                  isActive
                    ? 'text-emerald-400 translate-x-0.5'
                    : 'text-slate-500 group-hover:text-slate-300'
                }`}
              >
                <ChevronRight className="h-4 w-4" />
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

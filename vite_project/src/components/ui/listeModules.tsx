import React from 'react'

type Item = {
  id: string
  emoji: string
  label: string
  title: string
  description: string
  accent?: string
}

type Props = {
  items: Item[]
  currentIndex: number
  onSelect: (index: number) => void
  displaySec?: number
}

export default function ListeModules({ items, currentIndex, onSelect, displaySec = 6 }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-slate-200 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-200/20" /> Nos Principales FONCTONNALITES</div>
      </div>

      {items.map((it, i) => (
        <button
          key={it.id}
          onClick={() => onSelect(i)}
          className={`w-full text-left flex items-center gap-4 rounded-xl p-4 transition-shadow border ${currentIndex === i ? 'bg-white/5 border-blue-400 shadow-lg' : 'bg-white/3 border-white/5'}`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${currentIndex === i ? 'bg-white' : 'bg-white/90'}`}>
              <span className={`${currentIndex === i ? '' : 'text-slate-800'}`}>{it.emoji}</span>
            </div>
            <div>
              <div className={`font-semibold ${currentIndex === i ? 'text-white' : 'text-slate-100'}`}>{it.label}</div>
              <div className="text-xs text-slate-300 max-w-[220px] truncate">{it.description}</div>
            </div>
          </div>
          <div className="ml-auto text-sm text-slate-300">➜</div>
        </button>
      ))}
    </div>
  )
}

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
  item: Item
}

export default function DescriptionModule({ item }: Props) {
  return (
    <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-violet-500 p-8 shadow-2xl border border-white/6">
      <div className="flex items-start gap-6">
        <div className="text-6xl p-4 bg-white/10 rounded-lg">{item.emoji}</div>
        <div className="flex-1 text-white">
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-extrabold tracking-tight">{item.title}</h2>
            <span className="text-sm uppercase tracking-wider rounded-full bg-white/10 px-3 py-1 text-white/90">ACTIF</span>
          </div>
          <p className="mt-4 text-lg text-purple-100/95">{item.description}</p>

          <div className="mt-8 ml-100 flex items-center gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">Explorer ce module</button>
          </div>
        </div>
      </div>
    </div>
  )
}

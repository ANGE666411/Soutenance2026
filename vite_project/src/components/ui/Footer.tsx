import React from 'react'
import { Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-slate-950 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-white/10 p-1">
                <img src="/LOGOS.png" alt="Logo AvicCare" className="h-6 w-6 object-contain" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Avic<span className="text-emerald-400">Care</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Plateforme d'intelligence artificielle dédiée à l'aviculture de précision. 
              Surveillance proactive, anticipation pathologique et télémédecine vétérinaire connectée.
            </p>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500">
              <Shield className="h-3.5 w-3.5 text-emerald-400" />
              <span>Chiffrement des données de santé animale AES-256</span>
            </div>
          </div>

          {/* Navigation Produit */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#simulator" className="hover:text-emerald-400 transition-colors">
                  Diagnostic Prédictif IA
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">
                  Vision & Détection
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">
                  Télé-expertise Vétérinaire
                </a>
              </li>
              <li>
                <a href="#roi" className="hover:text-emerald-400 transition-colors">
                  Calculateur de Rentabilité
                </a>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Ressources
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">
                  Guide d'Intégration
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Foire aux Questions
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-emerald-400 transition-colors">
                  Études de Cas & Retours
                </a>
              </li>
              <li>
                <span className="text-slate-500">Documentation API</span>
              </li>
            </ul>
          </div>

          {/* Légal & Sécurité */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Légal
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Confidentialité des Données
                </span>
              </li>
              <li>
                <span className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Normes de Biosécurité
                </span>
              </li>
              <li>
                <span className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Conditions Générales
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 AvicCare Technologies Inc. Tous droits réservés.
          </div>
          <div>
            Plateforme d'Aviculture de Précision.
          </div>
        </div>
      </div>
    </footer>
  )
}

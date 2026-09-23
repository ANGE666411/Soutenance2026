import React from 'react'
import { Sparkles, Stethoscope, LineChart, BellRing, ClipboardCheck, ArrowUpRight } from 'lucide-react'

export default function FeaturesBento() {
  return (
    <section id="features" className="relative py-28 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* En-tête épuré */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/[0.06] px-3.5 py-1 text-xs font-medium text-teal-300">
            <span>Fonctionnalités Piliers</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Une Suite Complète pour Sécuriser vos Élevages
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Tous les outils nécessaires pour surveiller, diagnostiquer et optimiser les performances de chaque bâtiment.
          </p>
        </div>

        {/* Grille Bento épurée */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Carte 1 : Vision IA (Col 8) */}
          <div className="lg:col-span-8 rounded-3xl border border-white/[0.08] bg-slate-900/40 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">Deep Learning & Vision</span>
              </div>

              <h3 className="mt-6 text-xl sm:text-2xl font-bold text-white">
                Vision Artificielle & Détection Biomécanique
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-xl">
                Analyse continue des postures, de la vitalité motrice et de la consistance des fientes. 
                L'IA signale les anomalies comportementales jusqu'à 72h avant les symptômes manifestes.
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-slate-950/70 border border-white/[0.05] p-4 grid grid-cols-3 gap-3 text-center text-xs font-mono">
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Activité globale</span>
                <span className="text-emerald-400 font-bold text-sm mt-0.5 block">Normale (95%)</span>
              </div>
              <div className="border-x border-white/[0.08]">
                <span className="text-[10px] text-slate-400 uppercase block">Foyer suspect</span>
                <span className="text-slate-300 font-bold text-sm mt-0.5 block">0 détecté</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Densité mesurée</span>
                <span className="text-teal-300 font-bold text-sm mt-0.5 block">14 kg/m²</span>
              </div>
            </div>
          </div>

          {/* Carte 2 : Télémédecine (Col 4) */}
          <div className="lg:col-span-4 rounded-3xl border border-white/[0.08] bg-slate-900/40 p-8 flex flex-col justify-between group hover:border-teal-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Télé-Expertise Vétérinaire Directe
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Partagez le pré-diagnostic de l'IA avec un docteur vétérinaire accrédité et recevez une prescription conforme en moins de 2 heures.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold">+180 cliniques</span> et vétérinaires spécialisés partenaires
            </div>
          </div>

          {/* Carte 3 : Zootechnie (Col 4) */}
          <div className="lg:col-span-4 rounded-3xl border border-white/[0.08] bg-slate-900/40 p-8 flex flex-col justify-between group hover:border-emerald-500/30 transition-all">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <LineChart className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Indicateurs Zootechniques (IC & GMQ)
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Suivi précis du ratio aliment/poids et détection des déviations par rapport au standard génétique de votre souche.
              </p>
            </div>

            <div className="mt-6 rounded-xl bg-white/[0.03] p-3 text-xs font-mono text-emerald-300 flex justify-between">
              <span>Gain Moyen Quotidien :</span>
              <span className="font-bold text-white">+58 g/j</span>
            </div>
          </div>

          {/* Carte 4 : Alertes temps réel (Col 4) */}
          <div className="lg:col-span-4 rounded-3xl border border-white/[0.08] bg-slate-900/40 p-8 flex flex-col justify-between group hover:border-amber-500/30 transition-all">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <BellRing className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Alertes SMS & WhatsApp d'Urgence
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Notification instantanée dès le franchissement d'un seuil critique (chute d'eau, pic de mortalité ou panne de ventilation).
              </p>
            </div>

            <div className="mt-6 rounded-xl bg-amber-950/20 border border-amber-500/20 p-3 text-xs text-amber-300">
              Alerte acheminée en moins de 30 secondes
            </div>
          </div>

          {/* Carte 5 : Registre Sanitaire (Col 4) */}
          <div className="lg:col-span-4 rounded-3xl border border-white/[0.08] bg-slate-900/40 p-8 flex flex-col justify-between group hover:border-blue-500/30 transition-all">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <ClipboardCheck className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Registre Sanitaire Numérique
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Centralisation des fiches de lots, vaccins et traitements administrés, 100% conforme aux contrôles officiels.
              </p>
            </div>

            <div className="mt-6 text-xs text-slate-400">
              Traçabilité certifiée et sécurisée
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

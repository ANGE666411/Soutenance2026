import React from 'react'
import CircleBadge from '@/components/ui/circleBadge'

type OrbitItem = {
	id: string
	node: React.ReactNode
}

type OrbitGroupProps = {
	items: OrbitItem[]
	radius?: number // pixels
	durationSec?: number
	className?: string
}

/**
 * OrbitGroup
 * Place items in a circular orbit around a fixed center.
 * - The outer wrapper `.orbit-motion` performs a continuous rotation.
 * - Each item is positioned by rotating it by an angle then translating it on X by `radius`.
 * - `.counter-spin` on the inner content cancels the rotation so icons stay upright.
 */
export default function OrbitGroup({
	items = [],
	radius = 100,
	durationSec = 12,
	className = '',
}: OrbitGroupProps) {
	const n = items?.length ?? 0

	// If there are no items, render only the fixed center to avoid runtime errors
	if (n === 0) {
		return (
			<div className={`orbit-wrapper ${className}`} style={{ width: '100%', height: '100%' }}>
				<div className="orbit-center">
					<CircleBadge size="h-32 w-32" variant="white" ariaLabel="Cercle central">
						<img src="/logo.png" alt="Logo" className="h-24 w-24 object-contain" />
					</CircleBadge>
				</div>
			</div>
		)
	}

	return (
		<div className={`orbit-wrapper ${className}`} style={{ width: '100%', height: '100%' }}>
			{/* Animated wrapper that rotates all children around the center */}
			<div
				className="orbit-motion"
				style={{
					'--orbit-duration': `${durationSec}s`,
				} as React.CSSProperties}
			>
				{items.map((it, i) => {
					const angle = (360 / Math.max(1, n)) * i
					// First translate the item so its center is at the wrapper center,
					// then rotate by the desired angle and translate outward by radius.
					// This ensures the orbit center is truly centered.
					const transform = `translate(-50%,-50%) rotate(${angle}deg) translateX(${radius}px)`

					return (
						<div
							key={it.id}
							className="orbit-item"
							style={{ transform }}
						>
							{/* counter-spin keeps the inner node upright */}
							<div
								className="counter-spin"
								style={{
									'--orbit-duration': `${durationSec}s`,
								} as React.CSSProperties}
							>
								{it.node}
							</div>
						</div>
					)
				})}
			</div>

			{/* Center fixed element: can optionally be replaced by caller; keep a default */}
			<div className="orbit-center">
				<CircleBadge size="h-32 w-32" variant="white" ariaLabel="Cercle central">
					<img src="/logo.png" alt="Logo" className="h-24 w-24 object-contain" />
				</CircleBadge>
			</div>
		</div>
	)
}


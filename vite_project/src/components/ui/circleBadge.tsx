//ce composant permet
import React from 'react'

type CircleBadgeProps = {
	size?: 'sm' | 'md' | 'lg' | string
	className?: string
	children?: React.ReactNode
	onClick?: () => void
	ariaLabel?: string
	variant?: 'white' | 'transparent'
}

const sizeMap: Record<string, string> = {
	sm: 'h-8 w-8',
	md: 'h-12 w-12',
	lg: 'h-16 w-16',
}

export default function CircleBadge({
	size = 'md',
	className = '',
	children,
	onClick,
	ariaLabel,
	variant = 'white',
}: CircleBadgeProps) {
	const sizeClass = sizeMap[size] ?? size
	const bgClass = variant === 'white' ? 'bg-white/90' : 'bg-transparent'

	if (onClick) {
		return (
			<button
				type="button"
				aria-label={ariaLabel}
				onClick={onClick}
				className={`flex items-center justify-center rounded-full ${bgClass} shadow-sm ${sizeClass} ${className}`}
			>
				{children}
			</button>
		)
	}

	return (
		<div
			role={ariaLabel ? 'img' : undefined}
			aria-label={ariaLabel}
			className={`flex items-center justify-center rounded-full ${bgClass} shadow-sm ${sizeClass} ${className}`}
		>
			{children}
		</div>
	)
}


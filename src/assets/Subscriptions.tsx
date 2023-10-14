import React from "react"

const SubscriptionSvg = ({ isSelected }: { isSelected: boolean }) => {
	return (
		<div>
			{isSelected ? (
				<svg
					enableBackground='new 0 0 24 24'
					height='24'
					viewBox='0 0 24 24'
					width='24'
					focusable='false'
					className='pointer-events-none block w-full h-full'
					// style='pointer-events: none; display: block; width: 100%; height: 100%;'
				>
					<path d='M20 7H4V6h16v1zm2 2v12H2V9h20zm-7 6-5-3v6l5-3zm2-12H7v1h10V3z'></path>
				</svg>
			) : (
				<svg
					enableBackground='new 0 0 24 24'
					height='24'
					viewBox='0 0 24 24'
					width='24'
					focusable='false'
					className='pointer-events-none block w-full h-full'
					// style='pointer-events: none; display: block; width: 100%; height: 100%;'
				>
					<path d='M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z'></path>
				</svg>
			)}
		</div>
	)
}

export default SubscriptionSvg

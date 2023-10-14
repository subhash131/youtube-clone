import React from "react"

const HomeSvg = ({ isSelected }: { isSelected: boolean }) => {
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
				>
					<g>
						<path d='M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z'></path>
					</g>
				</svg>
			) : (
				<svg
					enableBackground='new 0 0 24 24'
					height='24'
					viewBox='0 0 24 24'
					width='24'
					focusable='false'
					className='pointer-events-none block w-full h-full'
				>
					<path d='m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z'></path>
				</svg>
			)}
		</div>
	)
}

export default HomeSvg

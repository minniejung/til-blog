import { cn } from '@/utils/helpers/cn'

type TabType = {
	id: string
	label: string
}

export const Tabs = ({
	tabs,
	activeTab,
	setActiveTab,
}: {
	tabs: TabType[]
	activeTab: string
	setActiveTab: (id: string) => void
}) => {
	return (
		<div className='border-b border-purple-300'>
			<div className='flex space-x-4'>
				{tabs.map(tab => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={cn(
							'w-full rounded-t-xl border border-b-2 border-transparent p-4 font-semibold text-gray-600',
							activeTab === tab.id
								? 'border-purple-500 bg-purple-50 font-bold text-purple-600'
								: 'hover:text-purple-500',
						)}>
						{tab.label}
					</button>
				))}
			</div>
		</div>
	)
}
